import express from 'express'
import { PORT } from './config/const.config.js'
import connect from './config/db.config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

import authRoute from './routes/auth.route.js'

app.use('/api/auth', authRoute)

app.listen(PORT, () => {
  connect()
  console.log('App listening: http://localhost:' + PORT)
})
