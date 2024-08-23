import MakeUserRemove from '../../../commands/factories/user/makeUserRemove.js'
import { removeUser } from '../../../schemas/UserSchema.js'

export async function UserRemoveController(req, res) {
    try {
        const userData = req.user
        const makeUserRemove = MakeUserRemove()
        const { user: user_admin } = await makeUserRemove.findAdmin(userData.sub.email)

        if (user_admin.role !== "Admin" || !userData) {
            throw new Error("Is not possible carry that action")
        }

        const { registration, email, title, description } = removeUser.parse(req.body)

        console.log(registration, email, title, description)

        const { user_data } = await makeUserRemove.findUser(registration, email)

        await makeUserRemove.removeUser(user_data.email, user_admin.email, title, description)

        res
            .status(200)
            .send({
                status: 200,
                message: "User Removed"
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