import React, {useState, useEffect} from 'react';
import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import UserDetails from './components/UserDetails';
import CreateBlogForm from './components/CreateBlogForm';
import loginService from './services/loginService';
import blogService from './services/blogs';

function App() {

  const USER_LOCAL = 'loggedBlogUser';

  const [blogs, setBlogs] = useState([]);
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
    } catch (exception) {
      //todo show error
    }
  }

  const logOut = () => {
    window.localStorage.setItem(
      USER_LOCAL, null
      );
    setUser(null);
  };

  const createBlog = () => {
    const blog = {title,author,url};
    blogService.create(blog);
  }

  return (
    <div className="App">
      {user===null && <LoginForm loginDetails={{username, password}} setUsername={setUsername} setPassword={setPassword} submit={() => loginWithDetails()} />}
      {user!==null && 
      (<>
        <UserDetails user={user} logOut={logOut} />
        <CreateBlogForm data={{title,author,url}} setTitle={setTitle} setAuthor={setAuthor} setURL={setURL} submit={()=>createBlog()}/>
        <BlogsList blogs={blogs} />
        </>)
      }
    </div>
  );
}

export default App;
