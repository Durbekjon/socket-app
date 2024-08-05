import express from 'express'
import http from 'http'
import { PORT } from './config/const.config.js'
import connect from './config/db.config.js'

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

import authRoute from './routes/auth.route.js'
import socketIo from './controllers/socket.controller.js'

app.use('/api/auth', authRoute)
socketIo(server)

server.listen(PORT, () => {
  connect()
  console.log('App listening: http://localhost:' + PORT)
})
