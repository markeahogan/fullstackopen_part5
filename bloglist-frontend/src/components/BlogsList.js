import React from 'react';
import Blog from './Blog';

const BlogsList = ({user, blogs, logOut}) => {
    return (
     <>
        <h1>blogs</h1>
        <h2>{user.name} logged in <button onClick={logOut}>log out</button></h2>
        {blogs.map(x => <Blog key={x.title} blog={x} />)}
     </>
     );
};

export default BlogsList;