import express from 'express'
import { RegisterController } from '../register.controller.js'
import {
    AuthenticateController,
    ProfileController
} from './index.js'
import { VerifyJWT } from '../../middlewares/jwt/VerifyJWT.js'

const router = express.Router()

router.post('/user', RegisterController) // Register a new User
router.post('/auth/user', AuthenticateController) // Authenticate a user

router.get('/user/profile', [VerifyJWT], ProfileController) // Get User Profile (User should is authenticated)

export {
    router as UserRoutes //Rename route to UserRoutes and export it (reference: app.js)
}