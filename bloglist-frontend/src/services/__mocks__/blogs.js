
const samples = [
    {
        id:0,
        title:"Test Title 0",
        author:"Test Author 0",
        url:"Test URL",
        likes:10,
        user:{name:"Test Username"}
    },{
        id:1,
        title:"Test Title 1",
        author:"Test Author 1",
        url:"Test URL",
        likes:10,
        user:{name:"Test Username"}
    },{
        id:2,
        title:"Test Title 2",
        author:"Test Author 2",
        url:"Test URL",
        likes:10,
        user:{name:"Test Username"}
    },{
        id:3,
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

const setToken = () => {};

export default { getAll, setToken };