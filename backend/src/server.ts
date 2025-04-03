
import express from 'express' //ESM 
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'
const app = express()

connectDB()

app.use(express.json()) // Middleware to parse JSON bodies  

app.use('/', router)

export default app