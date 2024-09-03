import { beforeEach, describe, expect, it } from 'vitest'
import { UserInMemoryRepos } from '../../repositories/in-memory/UserInMemoryRepos'
import RegisterCommand from '../register.command.js'
import { compare } from 'bcrypt'
import { errors } from '../../errors/commands/RegisterCommandError.js'

describe('Register user (command)', () => {

    let usersMemoryRepository;
    let makeRegister;

    beforeEach(() => {
        usersMemoryRepository = new UserInMemoryRepos()
        makeRegister = new RegisterCommand(usersMemoryRepository)
    })

    it('Should be able to register', async () => {
        const { user } = await makeRegister.execute({
            "name": "Alissa Doe",
            "email": "alissadoe@discente.ifpe.edu.br",
            "registration": "20241ADSPL0002",
            "password": "12345678"
        })

        expect(user.id).toStrictEqual(expect.any(String))
    })

    it('Should hash user password equals', async () => {
        const { user } = await makeRegister.execute({
            "name": "Alissa Doe",
            "email": "alissadoe@discente.ifpe.edu.br",
            "registration": "20241ADSPL0002",
            "password": "12345678"
        })

        const isPwdCorrect = await compare("12345678", user.password)

        expect(isPwdCorrect).toBe(true)
    })

    it('Should not be able to register with same email twice.', async () => {
        const email = "alissadoe@discente.ifpe.edu.br"

        await makeRegister.execute({
            "name": "Alissa Doe",
            email,
            "registration": "20241ADSPL0002",
            "password": "12345678"
        })

        await expect(
            makeRegister.execute({
                "name": "Alissa Doe",
                email,
                "registration": "20241ADSPL0002",
                "password": "12345678"
            })
        ).rejects.toEqual(errors.userAlreadyExists)

    })
})