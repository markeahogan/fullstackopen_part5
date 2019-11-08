import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/blogs'

let token = null

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async blog => {
  const config = {
    headers:{Authorization:token}
  }

  const response = await axios.post(baseUrl, blog, config);
  return response.data;
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
};

export default { getAll, setToken, create }