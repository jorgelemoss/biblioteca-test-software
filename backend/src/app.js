/** imports */
import express from 'express'
import cors from 'cors'
import { UserRoutes } from './http/controllers/user/routes.js'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger-document.json' assert { type: "json" }

const app = express()

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true
    })
)
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/api', UserRoutes) // Routes from User (Auth, register...)

app.use('*', (req, res) => {
    res
        .status(404)
        .send({
            err: "Route Not found",
            status: 404
        })
})

export { app }