import express from 'express'
import { PORT } from './config/const.config.js'
import connect from './config/db.config.js'

const app = express()

app.listen(PORT, () => {
  connect()
  console.log('App listening: http://localhost:' + PORT)
})
