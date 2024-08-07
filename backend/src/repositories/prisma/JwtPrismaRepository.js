import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class JWTPrismaRepository {

    async storeRefreshToken(userId, refreshToken) {
        const storeToken = await prisma.account.create({
            data: {
                refreshToken,
                User: {
                    connect: {
                        id: userId
                    }
                }
            }
        })

        return storeToken
    }
}