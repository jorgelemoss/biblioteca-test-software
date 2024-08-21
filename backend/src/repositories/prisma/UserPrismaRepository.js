import { prisma } from '../../lib/prisma.js'
import { errors } from '../../errors/repositories/UserPrismaRepositoryErrors.js'

export default class UserPrismaRepository {

    async findByRegistration(registration) { // Find user by registration
        try {
            const user = await prisma.user.findUnique({
                where: {
                    registration // Find user registration in User Model
                }
            })

            return user

        } catch (err) {
            throw errors.findByRegistrationError

        }
    }

    async findById(id) { // Find user by id
        const user = await prisma.user.findUnique({
            where: {
                id // Find user id in User Model
            }
        })

        return user
    }

    async findByEmail(email) { // Find user by email
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email // Find user email in User Model
                }
            })

            return user

        } catch (err) {
            throw errors.findByEmailError

        }
    }

    async create(data) { // Catch input values
        try {
            const user = await prisma.user.create({ // Create a new user with values from data 
                data
            })

            return user

        } catch (err) {
            throw errors.createUserError

        }
    }
}