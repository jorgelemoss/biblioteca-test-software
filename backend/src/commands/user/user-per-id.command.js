export default class PerIdCommand {

    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository
    }

    async confirmAdmin(email) {
        const admin = await this.#userRepository.findByEmail(email)

        if (admin.role !== "Admin") {
            throw new Error("User is not a admin")
        }

        return { admin }
    }

    async getUserById(id) {
        const user = await this.#userRepository.findOnlyUserById(id)

        if (!user) {
            throw new Error("User doesn't exists")
        }

        return user
    }
}