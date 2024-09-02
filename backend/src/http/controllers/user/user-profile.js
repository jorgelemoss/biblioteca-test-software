import MakeGetProfile from '../../../commands/factories/user/makeGetProfile.js'

export async function ProfileController(req, res) {
    try {
        const userData = req.user

        const makeGetProfile = MakeGetProfile() // Use value returned into MakeGetProfile()

        const { user } = await makeGetProfile.execute({ id: userData.sub.id }) // Get user data from token destructured into req.user (reference: VerifyJWT.js)


        /** If success, return user data and allow auth */

        res
            .status(200)
            .send({
                status: 200,
                auth: true,
                user
            })

    } catch (err) {
        res.status(400)
            .json({
                message: err.message
            })

    }
}