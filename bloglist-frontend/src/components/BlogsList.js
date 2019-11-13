import React from 'react';
import Blog from './Blog';

const BlogsList = ({blogs, incrementLikes, removeBlog}) => {
   const sortedBlogs = [...blogs].sort((x, y)=>y.likes - x.likes);
    return (
     <>
        {sortedBlogs.map(x => <Blog key={x.title} blog={x} incrementLikes={incrementLikes} remove={removeBlog} />)}
     </>
     );
};

export default BlogsList;