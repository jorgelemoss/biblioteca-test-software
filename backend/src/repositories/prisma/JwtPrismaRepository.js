import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class JWTPrismaRepository {

    async removeTokenFromDb(refreshToken) {
        const removeToken = await prisma.account.delete({
            where: {
                refreshToken
            }
        })

        return removeToken
    }

    async storeRefreshToken(userId, refreshToken) {

        const storeToken = await prisma.account.create({
            data: {
                refreshToken,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        })

        return storeToken

        // const userAccount = await prisma.account.findUnique({
        //     where: { userId }
        // })

        // if (userAccount) {
        //     const storeToken = await prisma.account.update({
        //         where: { userId },
        //         data: { refreshToken }
        //     })

        //     return storeToken
        // } else {
        //     const storeToken = await prisma.account.create({
        //         data: {
        //             refreshToken,
        //             user: {
        //                 connect: {
        //                     id: userId
        //                 }
        //             }
        //         }
        //     })


    }

}
