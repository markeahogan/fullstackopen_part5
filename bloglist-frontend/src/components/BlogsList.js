import React from 'react';
import Blog from './Blog';

const BlogsList = ({blogs, incrementLikes, removeBlog, currentUser}) => {
   const sortedBlogs = [...blogs].sort((x, y)=>y.likes - x.likes);
    return (
     <>
        {sortedBlogs.map(x => <Blog key={x.title} blog={x} 
            incrementLikes={incrementLikes} remove={removeBlog} 
            currentUser={currentUser}/>)}
     </>
     );
};

export default BlogsList;