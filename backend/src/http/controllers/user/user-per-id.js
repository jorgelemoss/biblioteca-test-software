import MakeUserPerId from '../../../commands/factories/user/makeUserPerId.js'

export async function PerIdController(req, res) {
    try {
        const userData = req.user

        const makeUserPerId = MakeUserPerId()

        await makeUserPerId.confirmAdmin(userData.sub.email)

        const { id } = req.params

        const userId = Number(id)

        if (isNaN(userId)) {
            throw new Error("Invalid ID format. ID must be a number.")
        }

        const user = await makeUserPerId.getUserById(userId)

        res
            .status(200)
            .send({
                status: 200,
                user
            })

    } catch (err) {
        res
            .status(400)
            .send({
                status: 400,
                message: err.message
            })
    }
}