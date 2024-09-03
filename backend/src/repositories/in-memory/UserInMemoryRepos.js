import { randomUUID } from "crypto"
import bcrypt from 'bcrypt'

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
            password: bcrypt.hashSync("12345678", 10),
            role: "Admin"
        })

        // Adiciona um usuário não-admin para os testes
        this.items.push({
            id: randomUUID(),
            name: "Raysa Moraes",
            email: "raysamoraes@discente.ifpe.edu.br",
            registration: "20241ADSPL0001",
            password: bcrypt.hashSync("12345678", 10),
            role: "User"
        })
    }

    async findById(id) {
        const user = this.items.find((item) => item.id === id)
        return user || null
    }

    async findByEmail(email) {
        const user = this.items.find((user) => user.email === email)
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

    async findOnlyUserById(id) {
        const user = this.items.find((user) => user.id == id)
        return user
    }


    async findByRegistration(registration) { // Find user by registration

        const user = await this.items.find((user) => user.registration === registration)

        return user
    }

    async getAllUsers() {
        return this.items
    }
}
