import React from 'react';
import TextField from './TextField';

const LoginForm = ({loginDetails, setUsername, setPassword, submit}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>log in to application</h1>
            <TextField label={"username"} value={loginDetails.username} onChange={setUsername}/>
            <TextField label={"password"} value={loginDetails.password} onChange={setPassword}/>
            <input type="submit" value="login" />
        </form>
    );
};

export default LoginForm;