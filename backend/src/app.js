/** imports */
import express from 'express'
import cors from 'cors'
import { UserRoutes } from './http/controllers/user/routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true
    })
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(UserRoutes) // Routes from User (Auth, register...)

export { app }