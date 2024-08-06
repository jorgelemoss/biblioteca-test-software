import express from 'express'
import { RegisterController } from '../register.controller.js'

const route = express.Router()

route.post('/user', RegisterController) // Register a new User

export {
    route as UserRoutes //Rename route to UserRoutes and export it (reference: app.js)
}