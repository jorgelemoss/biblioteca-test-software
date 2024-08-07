import { PrismaClient } from '@prisma/client'
import { errors } from '../../errors/repositories/UserPrismaRepositoryErrors.js'

const prisma = new PrismaClient()

export default class UserPrismaRepository {

    async findByEmail(email) { // Find user by email
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            return user

        } catch (err) {
            throw errors.findByEmailError

        }
    }

    async create(data) { // Create a new user
        try {
            const user = await prisma.user.create({
                data
            })

            return user

        } catch (err) {
            throw errors.createUserError

        }
    }
}