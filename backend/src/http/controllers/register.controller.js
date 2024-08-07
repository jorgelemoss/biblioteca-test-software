import MakeRegister from '../../commands/factories/user/makeRegister.js'
import { z } from 'zod'

export async function RegisterController(req, res) {

    try {

        const acceptableEmailProviders = ['discente.ifpe.edu.br', 'doscente.ifpe.edu.br'];

        const registerSchema = z.object({
            name: z.string().min(6).max(24),
            email: z.string().email().refine((email) => {
                const domain = email.split('@')[1]
                return acceptableEmailProviders.includes(domain)
            }, {
                message: "Email provider is not acceptable",
            }),
            registration: z.string().min(14).max(14),
            password: z.string().min(8).max(32)
        }).required({
            name: true,
            email: true,
            registration: true,
            password: true
        })

        const { name, email, registration, password } = registerSchema.parse(req.body) // Get user data from client

        const makeRegister = MakeRegister()

        await makeRegister.execute({ name, email, registration, password }) // Wait receive user data from register.command.js

        /**
         * If Register Command not have error, user create is success!
         */
        res
            .status(200)
            .json({
                status: 200,
                message: "User Created!"
            })

    } catch (err) {
        res
            .status(400)
            .json({
                message: err.message
            })
    }
}