import React from 'react';
import TextField from './TextField';

const CreateBlogForm = ({data, setTitle, setAuthor, setURL, submit}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <h2>Create blog</h2>
            <TextField label={"Title"} value={data.title} onChange={setTitle} />
            <TextField label={"Author"} value={data.author} onChange={setAuthor} />
            <TextField label={"URL"} value={data.url} onChange={setURL} />
            <input type="submit" value="create" />
            </form>
        </>
    );
};

export default CreateBlogForm;