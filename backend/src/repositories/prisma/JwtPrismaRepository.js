import { prisma } from '../../lib/prisma.js'

export default class JWTPrismaRepository {

    async removeTokenFromDb(refreshToken) {
        const removeToken = await prisma.account.deleteMany({ // Remove refreshToken from user specified
            where: {
                refreshToken,
            },
        })

        return removeToken
    }

    async storeRefreshToken(userId, refreshToken) {

        const storeToken = await prisma.account.create({ // Store refreshToken into user specified
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

    }

}
