import React, {useState, useEffect} from 'react';
import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import UserDetails from './components/UserDetails';
import CreateBlogForm from './components/CreateBlogForm';
import Notification from './components/Notification';
import loginService from './services/loginService';
import blogService from './services/blogs';

function App() {

  const USER_LOCAL = 'loggedBlogUser';

  const [blogs, setBlogs] = useState([]);
  const [notification, setNotification] = useState(null);

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setURL] = useState('');  

  useEffect(() => {
    blogService.getAll().then(x => setBlogs(x));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(USER_LOCAL);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, [])

  const loginWithDetails = async () => {
    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        USER_LOCAL, JSON.stringify(user)
      );

      setUser(user);
      setUsername('');
      setPassword('');
      setNotification({message: "Loggged in", style:"success"});
      setTimeout(() => setNotification(null), 1000);
    } catch (exception) {
      setNotification({message: "wrong username or password", style:"error"});
      setTimeout(() => setNotification(null), 1000);
    }
  }

  const logOut = () => {
    window.localStorage.setItem(USER_LOCAL, null);
    setUser(null);
  };

  const createBlog = async () => {
    const blog = {title,author,url};
    try{
      await blogService.create(blog);    
      const blogs = await blogService.getAll();
      setBlogs(blogs);
      setNotification({message: `Created blog ${title} by ${author}`, style:"success"});
      setTimeout(() => setNotification(null), 1000);
      setTitle('');
      setAuthor('');
      setURL('');
    } catch (e) {      
      setNotification({message: "Failed to create blog", style:"error"});
      setTimeout(() => setNotification(null), 1000);
    }
  }

  return (    
    
    <div className="App">
      {notification && <Notification {...notification} /> }
      {user===null && <LoginForm loginDetails={{username, password}} setUsername={setUsername} setPassword={setPassword} submit={() => loginWithDetails()} />}
      {user!==null && 
      (<>
        <UserDetails user={user} logOut={logOut} />
        <CreateBlogForm data={{title,author,url}} setTitle={setTitle} setAuthor={setAuthor} setURL={setURL} submit={()=>createBlog()}/>
        <BlogsList blogs={blogs} />
        </>)
      }
    </div>
  )
}

export default App;
