import React from 'react';
import TextField from './TextField';

const CreateBlogForm = ({ title, author, url, submit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Create blog</h2>
                <TextField label={'Title'} {...title} />
                <TextField label={'Author'} {...author} />
                <TextField label={'URL'} {...url} />
                <input type="submit" value="create" />
            </form>
        </>
    );
};

export default CreateBlogForm;