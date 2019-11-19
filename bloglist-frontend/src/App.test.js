import React from 'react';
import {render, waitForElement} from '@testing-library/react';
jest.mock('./services/blogs');
import App from './App';
import blogService from './services/blogs';

describe('App', () => {
    test('only show login form when no user', async () => {
        const app = render(<App />);
        app.rerender(<App />);
        const login = await app.findByText('login');
        expect(login).toBeDefined();
    });

    test('show blogs when logged in', async () => {      
        
        const USER_LOCAL = 'loggedBlogUser';
        window.localStorage.setItem(USER_LOCAL, JSON.stringify({name:"TestUser"}));
        
        const app = render(<App />);
        app.rerender(<App />);
        
        const login = await app.findByText('TestUser', {exact:false});

        const blogs = await blogService.getAll();

        const blog = app.getByText(blogs[0].title, {exact:false})

        expect(login).toBeDefined();
        expect(blog).toBeDefined();
    });
});