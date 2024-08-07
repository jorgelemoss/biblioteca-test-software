import * as jwt from 'jsonwebtoken'
import MakeAuth from '../../../commands/factories/user/makeAuth.js'

const JWT_PAYLOAD = process.env?.JWT_PAYLOAD

export async function AuthenticateController(req, res) {

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
}