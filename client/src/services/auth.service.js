import axiosInstance from './axios'
class authService {
  async register(data) {
    return await axiosInstance.post('/api/auth/register', data)
  }
  async login(data) {
    return await axiosInstance.post('/api/auth/register', data)
  }
}
const AuthService = new authService()
export default AuthService
