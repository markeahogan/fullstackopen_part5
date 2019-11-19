import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/blogs';

let token = null;

const samples = [
    {
        title:"Test Title 0",
        author:"Test Author 0",
        url:"Test URL",
        likes:10,
        user:{name:"Test Username"}
    },{
        title:"Test Title 1",
        author:"Test Author 1",
        url:"Test URL",
        likes:10,
        user:{name:"Test Username"}
    },{
        title:"Test Title 2",
        author:"Test Author 2",
        url:"Test URL",
        likes:10,
        user:{name:"Test Username"}
    },{
        title:"Test Title 3",
        author:"Test Author 3",
        url:"Test URL",
        likes:10,
        user:{name:"Test Username"}
    },
]

const getAll = async () => {
    return Promise.resolve(samples);
};

const create = async blog => {
    const response = await axios.post(baseUrl, blog, getConfig());
    return response.data;
};

const update = async (blog) => {
    const updatedBlog = {
        title:blog.title,
        author:blog.author,
        url:blog.url,
        likes:blog.likes
    };
    const response = await axios.put(`${baseUrl}/${blog.id}`, updatedBlog, getConfig());
    return response.data;
};

const remove = async (blog) => {
    const response = await axios.delete(`${baseUrl}/${blog.id}`, getConfig());
    return response.data;
};

const getConfig = () => {
    return { headers:{ Authorization:token } };
};

const setToken = (newToken) => {
    token = `bearer ${newToken}`;
};

export default { getAll, setToken, create, update, remove };