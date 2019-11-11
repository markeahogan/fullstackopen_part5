import React from 'react';
import Blog from './Blog';

const BlogsList = ({blogs, incrementLikes}) => {
    return (
     <>
        {blogs.map(x => <Blog key={x.title} blog={x} incrementLikes={incrementLikes} />)}
     </>
     );
};

export default BlogsList;