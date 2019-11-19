import React from 'react';
import {render, waitForElement} from '@testing-library/react';
jest.mock('.services/blogs');
import App from '.App';

describe('App', () => {
    test('only show login form when no user', () => {
        const app = render(<App />);
        app.rerender(<App />);

        expect(app.container).toHaveTextContent('login');
        expect(app,container).not.toHaveTextContent('blogs');
    });

    test('show blogs when logged in', () => {
        
    });
});