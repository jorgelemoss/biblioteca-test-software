import { randomUUID } from "crypto"

/** Usado apenas para @Tests */

export class UserInMemoryRepos {
    items = []

    constructor() {
        // Adiciona um usuário admin para os testes
        this.items.push({
            id: randomUUID(),
            name: "John Doe",
            email: "johndoe@discente.ifpe.edu.br",
            registration: "20241ADSPL0000",
            password: "12345678"
        })

        // Adiciona um usuário não-admin para os testes
        this.items.push({
            id: randomUUID(),
            name: "Raysa Moraes",
            email: "raysamoraes@discente.ifpe.edu.br",
            registration: "20241ADSPL0001",
            password: "12345678"
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

    async create(data) {
        const user = {
            ...data,
            id: randomUUID(),
            created_at: new Date()
        }

        this.items.push(user)

        return user
    }

    async getAllUsers() {
        return this.items
    }
}
