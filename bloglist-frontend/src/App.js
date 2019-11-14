import React, {useState, useEffect} from 'react';

import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import Togglable from './components/Togglable';
import UserDetails from './components/UserDetails';
import Notification from './components/Notification';
import CreateBlogForm from './components/CreateBlogForm';

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

  const createBlogFormRef = React.createRef();

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
      notify("Loggged in");
    } catch (exception) {
      notify("wrong username or password", true);
    }
  }

  const logOut = () => {
    window.localStorage.setItem(USER_LOCAL, null);
    setUser(null);
  };

  const createBlog = async () => {
    const blog = {title,author,url};
    createBlogFormRef.current.toggleVisibility();
    try{
      await blogService.create(blog);    
      const blogs = await blogService.getAll();
      setBlogs(blogs);
      setTitle('');
      setAuthor('');
      setURL('');
      notify(`Created blog ${title} by ${author}`);
    } catch (e) {      
      notify("Failed to create blog", true);
    }
  }

  const incrementLikes = async (blog) => {
    try{
      blog.likes++;
      await blogService.update(blog);
      const blogs = await blogService.getAll();
      setBlogs(blogs);
    }catch(e){
      notify("Failed to like blog", true);
    }
  }

  const removeBlog = async (blog) => {
    const confirm = window.confirm(`delete ${blog.title}?`);
    if (!confirm){ return; }

    try{
      await blogService.remove(blog);
      const blogs = await blogService.getAll();
      setBlogs(blogs);
    }catch(e){
      notify("Failed to remove blog", true);
    }
  }

  const notify = (message, isError) => {
    setNotification({message, style:(isError ? "error" : "success")});
    setTimeout(() => setNotification(null), 1000);
  }

  return (    
    
    <div className="App">
      {notification && <Notification {...notification} /> }
      {user===null && <LoginForm loginDetails={{username, password}} setUsername={setUsername} setPassword={setPassword} submit={() => loginWithDetails()} />}
      {user!==null && 
      (<>
        <UserDetails user={user} logOut={logOut} />
        <Togglable buttonLabel = {"Create blog"} ref={createBlogFormRef}>
          <CreateBlogForm data={{title,author,url}} setTitle={setTitle} setAuthor={setAuthor} setURL={setURL} submit={()=>createBlog()}/>
        </Togglable>
        <BlogsList {...{blogs, incrementLikes, removeBlog, currentUser:user}}  />
        </>)
      }
    </div>
  )
}

export default App;
