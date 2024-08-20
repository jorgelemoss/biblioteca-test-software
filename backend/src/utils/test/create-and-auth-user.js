import { prisma } from '../../lib/prisma.js'
import bcrypt from 'bcrypt'
import request from 'supertest'
import { server } from '../../server.js'

export const createAndAuthUser = async () => {

    const hashed_password = await bcrypt.hash('12345678', 10)

    await prisma.user.create({
        data: {
            name: "John Doe",
            email: "johndoe@discente.ifpe.edu.br",
            registration: "20241ADSPL0000",
            password: hashed_password
        }
    })

    const authResponse = await request(server)
        .post('/api/auth')
        .send({
            registration: "20241ADSPL0000",
            password: "12345678"
        })


    const refreshToken = authResponse.headers['set-cookie']

    return refreshToken
}