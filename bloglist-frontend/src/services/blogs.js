import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/blogs'

let token = null

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async blog => {
  const response = await axios.post(baseUrl, blog, getConfig());
  return response.data;
}

const update = async (blog) => {
  const response = await axios.put(`${baseUrl}/${blog.id}`, blog, getConfig());
  return response.data;
}

const getConfig = () => {
  return {headers:{Authorization:token}};
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
};

export default { getAll, setToken, create, update }