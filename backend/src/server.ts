
import express from 'express' //ESM 
import cors from "cors"
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'
import { corsConfig } from './config/cors'
const app = express()

connectDB()

app.use(express.json()) // Middleware to parse JSON bodies  

app.use(cors(corsConfig))

app.use('/', router)

export default app