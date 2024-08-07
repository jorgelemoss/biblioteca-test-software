/** imports */
import express from 'express'
import cors from 'cors'
import { UserRoutes } from './http/controllers/user/routes.js'

const app = express()

app.use(
    cors({
        origin: ["http://localhost:3000"],
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(UserRoutes) // Routes from User (Auth, register...)

export { app }