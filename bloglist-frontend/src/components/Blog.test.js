import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render,fireEvent } from '@testing-library/react';
import Blog from './Blog';

const sampleBlog = {
    title:"Test Title",
    author:"Test Author",
    url:"Test URL",
    likes:10,
    username:"Test Username"
};