import dotenv from 'dotenv'
dotenv.config()

const DB_URI = process.env.DATABASE_URL
const PORT = process.env.PORT || 3000
const secret = process.env.JWT_SECRET

export { DB_URI, PORT, secret }
