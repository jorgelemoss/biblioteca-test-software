import { randomUUID } from "crypto"

/** Usado apenas para @Tests */

export class UserInMemoryRepos {
    items = []

    constructor() {
        // Adiciona um usuário admin para os testes
        this.items.push({
            id: randomUUID(),
            name: "John Doe",
            email: "johndoe@doscente.ifpe.edu.br",
            role: "Admin",
            password: "hashedpassword123"
        })

        // Adiciona um usuário não-admin para os testes
        this.items.push({
            id: randomUUID(),
            name: "Jane Doe",
            email: "nonadmin@doscente.ifpe.edu.br",
            role: "User",
            password: "hashedpassword456"
        })
    }

    async findById(id) {
        const user = this.items.find((item) => item.id === id)
        return user || null
    }

    async findByEmail(email) {
        const user = this.items.find((item) => item.email === email)
        return user || null
    }

    async getAllUsers() {
        return this.items
    }
}
