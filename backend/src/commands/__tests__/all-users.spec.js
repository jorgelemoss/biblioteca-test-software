import { beforeEach, describe, expect, it } from 'vitest'
import { UserInMemoryRepos } from '../../repositories/in-memory/UserInMemoryRepos.js'
import AllUsersCommand from '../all-users.command.js'

describe('Register user (command)', () => {

    let usersMemoryRepository;
    let makeGetAllUsers;

    beforeEach(() => {
        usersMemoryRepository = new UserInMemoryRepos()
        makeGetAllUsers = new AllUsersCommand(usersMemoryRepository)
    })

    it('User admin should be able to get all users', async () => {
        const admin = await makeGetAllUsers.confirmAdmin("johndoe@doscente.ifpe.edu.br")

        expect(admin.role).toBe("Admin")
    })

    it('Non-admin user should not be able to get all users', async () => {
        await expect(makeGetAllUsers.confirmAdmin("nonadmin@doscente.ifpe.edu.br")).rejects.toThrow("User is not a admin")
    })

})