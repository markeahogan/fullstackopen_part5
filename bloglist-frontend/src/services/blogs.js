import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/blogs'

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

export default { getAll }