import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render,fireEvent } from '@testing-library/react';
import SimpleBlog from './SimpleBlog';

const sampleBlog = {    
    title:"Test Title",
    author:"Test Author",
    likes:10
}

test('contains data', () =>{    
    const renderedBlog = render(<SimpleBlog blog={sampleBlog} onClick={()=>{}} />);

    expect(renderedBlog.container).toHaveTextContent(sampleBlog.title);
    expect(renderedBlog.container).toHaveTextContent(sampleBlog.author);
    expect(renderedBlog.container).toHaveTextContent(sampleBlog.likes);
});

test('like can be clicked', () =>{    
    let clicks = 0;
    const renderedBlog = render(<SimpleBlog blog={sampleBlog} onClick={()=>{clicks++}} />);
    const button = renderedBlog.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(clicks).toEqual(2);
});