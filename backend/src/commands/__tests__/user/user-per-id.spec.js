import { expect, describe, it, beforeEach } from 'vitest';
import { UserInMemoryRepos } from '../../../repositories/in-memory/UserInMemoryRepos.js';
import PerIdCommand from '../../user/user-per-id.command.js';

let usersRepository;
let makeGetUserById;

describe('Get User By Id', () => {

    beforeEach(() => {
        usersRepository = new UserInMemoryRepos();
        makeGetUserById = new PerIdCommand(usersRepository);
    });

    it('Should return the user when a valid ID is provided', async () => {
        const existingUser = usersRepository.items[0];

        const user = await makeGetUserById.getUserById(existingUser.id);

        expect(user).toBeTruthy();
        expect(user.id).toBe(existingUser.id);
    });

    it('Should throw an error if the user does not exist', async () => {
        await expect(makeGetUserById.getUserById("non-existing-id"))
            .rejects
            .toThrow("User doesn't exist");
    });

});
