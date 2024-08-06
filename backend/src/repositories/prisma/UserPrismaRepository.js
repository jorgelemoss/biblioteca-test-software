import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class UserPrismaRepository {

    async findByEmail(email) { // Find user by email
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user
    }

    async create(data) { // Create a new user
        const user = await prisma.user.create({
            data
        })

        return user
    }
}