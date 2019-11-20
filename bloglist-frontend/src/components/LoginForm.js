import React from 'react';
import TextField from './TextField';

const LoginForm = ({ usernameField, passwordField, submit }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>log in to application</h1>
            <TextField label={'username'} {...usernameField} />
            <TextField label={'password'} {...passwordField} />
            <input type="submit" value="login" />
        </form>
    );
};

export default LoginForm;