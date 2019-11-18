import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render,fireEvent } from '@testing-library/react';
import Blog from './Blog';

const sampleBlog = {
    title:"Test Title",
    author:"Test Author",
    url:"Test URL",
    likes:10,
    user:{name:"Test Username"}
};

test('renders the author and the title', () => {
    const rendered = render(<Blog blog={sampleBlog} />);

    expect(rendered.container).toHaveTextContent(sampleBlog.author);    
    expect(rendered.container).toHaveTextContent(sampleBlog.title);
    const div = rendered.container.querySelector('.expandable');
    expect(div).toHaveStyle("display: none");
});


test('renders the url, likes and userame on click', () => {
    const rendered = render(<Blog blog={sampleBlog} />);

    const div = rendered.container.querySelector('.expandable');
    fireEvent.click(div);

    expect(rendered.container).toHaveTextContent(sampleBlog.url);    
    expect(rendered.container).toHaveTextContent(sampleBlog.likes);
    expect(rendered.container).toHaveTextContent(sampleBlog.user.name);
    
    expect(div).not.toHaveStyle("display: none");
});