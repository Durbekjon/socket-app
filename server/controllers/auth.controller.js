import User from '../models/User.js'
import Responser from '../utils/responser.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
const responser = new Responser()

class authController {
  async register(req, res) {
    try {
      const { username, password } = req.body

      if (!username || !password) {
        return responser.res(res, 400, false, 'Bad request')
      }

      const data = await User.findOne({ username })

      if (data) {
        return responser.res(res, 403, false, 'Allready exist')
      }

      const user = await new User({ username, password }).save()
      const token = await jwt.sign({ id: user.id }, 'customsecret', {
        expiresIn: '1d',
      })
      delete user.password

      return responser.res(res, 201, { data: user, token })
    } catch (error) {
      return responser.errorHandler(res, error)
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body
      if (!username || !password) {
        return responser.res(res, 400, false, 'Bad request')
      }

      const data = await User.findOne({ username })
      if (!data) {
        return responser.res(res, 404, false, 'Not found')
      }

      const correctPassword = await bcrypt.compare(password, data.password)

      if (!correctPassword) {
        return responser.res(res, 400, false, 'Incorrect password')
      }

      const token = await jwt.sign({ id: data.id }, 'customsecret', {
        expiresIn: '1d',
      })

      delete data.password

      return responser.res(res, 200, { data, token })
    } catch (error) {
      return responser.errorHandler(res, error)
    }
  }
}
const AuthController = new authController()
export default AuthController
