import { prisma } from '../../lib/prisma.js'
import { errors } from '../../errors/repositories/UserPrismaRepositoryErrors.js'

export default class UserPrismaRepository {

    async findOnlyUserById(id) {
        const user = await prisma.user.findUnique({
            where: {
                id,
                role: {
                    contains: "User"
                }
            }
        })

        return user
    }

    async getAllUsers() {
        const user = await prisma.user.findMany({
            where: {
                role: {
                    contains: "User"
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
                registration: true,
                role: true,
            }
        })

        return user
    }

    async getUserByRole(email) {
        const role = await prisma.user.findUnique({
            where: {
                email
            },
            select: {
                role: true
            }
        })

        return role
    }

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
            },
            select: {
                id: true,
                name: true,
                email: true,
                registration: true,
                password: false,
                image: true,
                role: true,
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

    async deleteByEmail(email) {
        try {
            const user = await prisma.user.deleteMany({
                where: {
                    email
                }
            })

            return user

        } catch (err) {
            throw errors.findByEmailError

        }
    }

    async createLog(email, title, description) {
        const log = await prisma.logs.create({
            data: {
                title,
                description,
                user: {
                    connect: {
                        email
                    }
                }
            }
        })

        return log
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