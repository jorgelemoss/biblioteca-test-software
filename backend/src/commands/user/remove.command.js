export default class UserRemoveCommand {

    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository
    }

    async findAdmin(email) {
        const user = await this.#userRepository.findByEmail(email)

        if (!user) {
            throw new Error("Can't carry that action")
        }

        return { user }
    }

    async findUser(registration, email) {
        const user_registration = await this.#userRepository.findByRegistration(registration)
        const user_email = await this.#userRepository.findByEmail(email)

        if (!user_registration && !user_email) {
            throw new Error("Invalid registration or email data ")
        }

        return { user_data: user_email }
    }

    async removeUser(email, user_admin_email, title, description) {
        await this.#userRepository.deleteByEmail(email)

        await this.#userRepository.createLog(user_admin_email, title, description)

        return true
    }
}