export default class AllUsersCommand {

    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository
    }

    async confirmAdmin(email) {
        const admin = await this.#userRepository.findByEmail(email)

        if (!admin) {
            throw new Error("User is not a admin")
        }

        if (admin.role !== "Admin") {
            throw new Error("User is not admin")
        }

        return admin
    }

    async getAllUser() {
        const users = await this.#userRepository.getAllUsers()

        return users
    }
}