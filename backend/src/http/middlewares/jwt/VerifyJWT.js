import jwt from 'jsonwebtoken'
import { env } from '../../../env/index.js'

/** That is a @middleware */

const JWT_SECRET = env.JWT_SECRET

export const VerifyJWT = (req, res, next) => {

    try {
        const { accessToken } = req.cookies // Get accessToken cookie from frontend

        if (!accessToken) { // If accessToken is null
            throw new Error("Not have token")
        }

        const userData = jwt.verify(accessToken, JWT_SECRET) // Destructure accessToken with secret

        if (!userData) { // // If userData is null
            throw new Error("Not have a user data")
        }

        req.user = userData // Req user catch user data from userData

        next() // Continue with operations from currently route 

    } catch (err) {
        res
            .status(400)
            .send({
                err: err.message,
                status: 400
            })
    }
}