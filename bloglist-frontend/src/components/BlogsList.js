import React from 'react';
import Blog from './Blog';

const BlogsList = ({blogs}) => {
    return (
     <>
        {blogs.map(x => <Blog key={x.title} blog={x} />)}
     </>
     );
};

export default BlogsList;