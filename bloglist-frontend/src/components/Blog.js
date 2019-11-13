import React, {useState} from 'react';

const Blog = ({ blog, incrementLikes, remove }) => {
  const [expanded, setExpanded] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  
  const show = { display: '' }
  const hide = { display: 'none' }

  const username = (blog.user && blog.user.name) || '';

  return (
    <div style={blogStyle} onClick={() => setExpanded(!expanded)}>
      {blog.title} {blog.author}
      <div style={expanded ? show : hide}>
        <div>{blog.url}</div>
        <div>{blog.likes} likes <button onClick={() => incrementLikes()}>like</button></div>
        <div>added by {username}</div>
        <button onClick={() => remove()}>remove</button>
      </div>
    </div>
  )
}

export default Blog