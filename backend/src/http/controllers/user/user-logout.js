import MakeLogout from '../../../commands/factories/user/makeLogout.js'
import JwtPrismaRepository from '../../../repositories/prisma/JwtPrismaRepository.js'

export async function LogoutController(req, res) {
    try {
        const makeLogout = MakeLogout() // Use value returned into MakeLogout()
        await makeLogout.execute({ id: req.user.sub.id }) // Get user data from token destructured into req.user (reference: VerifyJWT.js)

        const { refreshToken } = req.cookies // Get refreshToken cookie from frontend

        await new JwtPrismaRepository().removeTokenFromDb(refreshToken) // Remove refreshToken from currently user

        res.clearCookie('refreshToken', { sameSite: "none", secure: true }) // Remove refreshToken from frontend
        res.clearCookie('accessToken', { sameSite: "none", secure: true })// Remove accessToken from frontend

        res // Return a new data with user unanthenticated
            .status(200)
            .send({
                auth: false,
                user: null
            })

    } catch (err) {
        res
            .status(400)
            .json({
                message: err.message
            })
    }
}