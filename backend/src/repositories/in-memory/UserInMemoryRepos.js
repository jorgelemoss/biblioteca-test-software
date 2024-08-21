import { randomUUID } from "crypto"

/** Used only for @Tests (reference: UserPrismaRepository.js) */

export class UserInMemoryRepos {
    #items = []

    async findById(id) {
        const user = this.#items.find((item) => item.id === id)

        return user || null
    }

    async findByEmail(email) {
        const user = this.#items.find((item) => item.email === email)

        return user || null
    }

    create(data) {
        const user = {
            id: randomUUID,
            ...data,
            password: undefined,
        }

        this.#items.push(user)

        return user
    }

}