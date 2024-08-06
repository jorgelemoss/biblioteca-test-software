import bcrypt from 'bcrypt'

export default class RegisterCommand {

    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository // Get User Prisma class (reference: makeRegister.js)
    }

    async execute({
        name,
        email,
        registration,
        password
    }) {

        const userEmail = await this.#userRepository.findByEmail(email) // Find user by email

        if (userEmail) { // Check user email and, if User already exists, occurs an error.
            throw new Error("User Already Exists")
        }

        const hashed_password = await bcrypt.hash(password, 10) // Encrypt user password

        const user = await this.#userRepository.create({ name, email, registration, password: hashed_password }) // Send and Get data from user created 

        return { user } // Return this data from user created (reference: register.controller.js)
    }
}