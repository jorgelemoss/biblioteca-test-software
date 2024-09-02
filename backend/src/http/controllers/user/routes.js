import express from 'express'
import { RegisterController } from '../register.controller.js'
import {
    AuthenticateController,
    ProfileController,
    LogoutController,
    UserRemoveController,
    AllUsersController,
    PerIdController
} from './index.js'
import { VerifyJWT } from '../../middlewares/jwt/VerifyJWT.js'

const router = express.Router()

router.post('/user', RegisterController) // Register a new User

router.post('/auth', AuthenticateController) // Authenticate a user

router.get('/me', [VerifyJWT], ProfileController) // Get User Profile (User should is authenticated)

router.get('/all-users', [VerifyJWT], AllUsersController) // Get all users

router.get('/user/:id', [VerifyJWT], PerIdController) // Get user by id

router.get('/logout', [VerifyJWT], LogoutController) // Log the user out (User should is authenticated)

router.delete('/user-remove', [VerifyJWT], UserRemoveController) // Delete user data

export {
    router as UserRoutes //Rename route to UserRoutes and export it (reference: app.js)
}