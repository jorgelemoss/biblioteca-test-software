import makeRegister from '../../commands/factories/makeRegister.js'

export async function RegisterController(req, res) {

    try {
        const { name, email, registration, password } = req.body // Get user data from client

        const MakeRegister = makeRegister()

        await MakeRegister.execute({ name, email, registration, password }) // Wait receive user data from register.command.js

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
        console.error(err)
    }
}