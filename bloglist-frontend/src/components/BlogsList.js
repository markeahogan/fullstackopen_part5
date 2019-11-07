import React from 'react';
import Blog from './Blog';

const BlogsList = ({user, blogs}) => {
    return (
     <>
        <h1>blogs</h1>
        <h2>{user.name} logged in</h2>
        {blogs.map(x => <Blog key={x.title} blog={x} />)}
     </>
     );
};

export default BlogsList;