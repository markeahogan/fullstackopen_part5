import React, {useState, useEffect} from 'react';
import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import loginService from './services/loginService';
import blogService from './services/blogs';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    blogService.getAll().then(x => setBlogs(x));
  }, []);

  const loginWithDetails = async () => {
    try {
      const user = await loginService.login({
        username, password
      })

      setUser(user);
      setUsername('');
      setPassword('');
    } catch (exception) {
      //todo show error
    }
  }

  return (
    <div className="App">
      {user===null && <LoginForm loginDetails={{username, password}} setUsername={setUsername} setPassword={setPassword} submit={() => loginWithDetails()} />}
      {user!==null && <BlogsList user={user} blogs={blogs}/>}
    </div>
  );
}

export default App;
