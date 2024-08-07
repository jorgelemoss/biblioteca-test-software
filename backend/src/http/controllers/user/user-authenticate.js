import * as jwt from 'jsonwebtoken'
import MakeAuth from '../../../commands/factories/user/makeAuth.js'

const JWT_PAYLOAD = process.env?.JWT_PAYLOAD

export async function AuthenticateController(req, res) {

    try {
        const { registration, password } = req.body

        const makeAuth = MakeAuth()

        const { user } = await makeAuth.execute({
            registration,
            password
        })

        const accessToken = jwt.sign({
            sub: {
                id: user.id,
                name: user.name,
                email: user.email,
                registration: user.registration,
                password: undefined
            }
        }, JWT_PAYLOAD, {
            expiresIn: '1h'
        })

        const refreshToken = jwt.sign({
            sub: {
                id: user.id,
                name: user.name,
                email: user.email,
                registration: user.registration,
                password: undefined
            }
        }, JWT_PAYLOAD, {
            expiresIn: '7d'
        })

        res
            .cookie('refreshToken', refreshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                sameSite: 'none',
                secure: true
            })

        res
            .cookie('accessToken', accessToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                sameSite: 'none',
                secure: true
            })


        res.status(200).json({
            auth: true,
            message: "Authenticated",
            ...user,
            password_hash: undefined
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