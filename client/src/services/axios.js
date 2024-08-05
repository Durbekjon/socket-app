import axios from 'axios'
import { API_URL } from '../consts/const'
const token = localStorage.getItem('token')

// Create Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: token,
  },
})

export default axiosInstance
