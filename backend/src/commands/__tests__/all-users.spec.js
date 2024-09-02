import { beforeEach, describe, expect, it } from 'vitest'
import { UserInMemoryRepos } from '../../repositories/in-memory/UserInMemoryRepos'
import AllUserCommand from '../all-users.command.js'
import { errors } from '../../errors/commands/RegisterCommandError.js'

describe('Register user (command)', () => {

    let usersMemoryRepository;
    let makeGetAllUsers;

    beforeEach(() => {
        usersMemoryRepository = new UserInMemoryRepos()
        makeGetAllUsers = new AllUserCommand(usersMemoryRepository)
    })

    it('User admin should be able to get all users', async () => {
        const admin = await makeGetAllUsers.confirmAdmin("johndoe@doscente.ifpe.edu.br")

        expect(admin.role).toBe("Admin")
    })

    it('User ')

})