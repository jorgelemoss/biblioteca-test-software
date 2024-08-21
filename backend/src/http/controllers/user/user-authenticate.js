import jwt from 'jsonwebtoken'
import MakeAuth from '../../../commands/factories/user/makeAuth.js'
import JWTPrismaRepository from '../../../repositories/prisma/JwtPrismaRepository.js'
import { env } from '../../../env/index.js'
import { authenticateSchema } from '../../../schemas/UserSchema.js'

const JWT_SECRET = env.JWT_SECRET

export async function AuthenticateController(req, res) {

    try {
        const { registration, password } = authenticateSchema.parse(req.body) // Get user data from client input

        const makeAuth = MakeAuth()// Use value returned into MakeAuth()

        const { user } = await makeAuth.execute({ // Get returned data
            registration,
            password
        })

        const accessToken = jwt.sign({ // Create a token to accessToken with user data
            sub: {
                id: user.id,
                name: user.name,
                email: user.email,
                registration: user.registration,
                password: undefined
            }
        }, JWT_SECRET, {
            expiresIn: '1h'
        })

        const refreshToken = jwt.sign({ // Create a token to refreshToken with user data
            sub: {
                id: user.id,
                name: user.name,
                email: user.email,
                registration: user.registration,
                password: undefined
            }
        }, JWT_SECRET, {
            expiresIn: '7d'
        })

        await new JWTPrismaRepository().storeRefreshToken(user.id, refreshToken) // Await JWTPrismaRepository storage refreshtoken (Which is what we need)

        res
            .cookie('refreshToken', refreshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                sameSite: 'none',
                secure: true
            }) // Create a cookie response with refreshToken token

        res
            .cookie('accessToken', accessToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                sameSite: 'none',
                secure: true
            }) // Create a cookie response with accessToken token


        res.status(200).json({
            auth: true,
            message: "Authenticated",
            ...user,
            password: undefined
        })

    } catch (err) {
        res
            .status(400)
            .send({
                err: err.message,
                status: 400
            })
    }

}