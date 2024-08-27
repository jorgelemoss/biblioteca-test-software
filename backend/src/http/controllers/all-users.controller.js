import MakeGetAllUsers from "../../commands/factories/user/makeGetAllUsers.js"

export async function AllUsersController(req, res) {
    try {
        const user = req.user

        const makeGetAllUsers = MakeGetAllUsers()

        await makeGetAllUsers.confirmAdmin(user.sub.email)

        const users = await makeGetAllUsers.getAllUser()

        res
            .status(200)
            .send({
                status: 200,
                users
            })



    } catch (err) {
        res
            .status(200)
            .send({
                status: 400,
                message: err.message
            })
    }

}