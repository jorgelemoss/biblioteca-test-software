import request from 'supertest'
import UserPrismaRepository from '../../repositories/prisma/UserPrismaRepository'


/** Used only for @Tests */
export const authUser = async (server) => {

    const userData = {
        name: "John Doe",
        email: "johndoe@discente.ifpe.edu.br",
        registration: "20241ADSPL0000",
        password: "12345678"
    }

    const userPrismaRepository = new UserPrismaRepository()

    const userRole = await userPrismaRepository.getUserByRole(userData.email)

    if (userRole.role === "User") {
        await userPrismaRepository.updateUserRole(userData.email, "Admin")
    }

    const authResponse = await request(server)
        .post('/api/auth')
        .send({
            registration: "20241ADSPL0000",
            password: "12345678"
        })


    const cookies = authResponse.headers['set-cookie']
    const token = cookies?.find((cookie) => cookie.startsWith('accessToken='))
    const accessToken = token?.split(';')[0].split('=')[1]

    return accessToken
}