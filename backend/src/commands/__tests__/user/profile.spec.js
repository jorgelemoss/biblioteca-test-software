import { expect, describe, it, beforeEach } from 'vitest';
import bcrypt from 'bcrypt';
import { UserInMemoryRepos } from '../../../repositories/in-memory/UserInMemoryRepos.js';
import ProfileCommand from '../../user/profile.command.js';

let usersRepository;
let makeGetProfile;

describe('Get User Profile Use Case', () => {
    beforeEach(() => {
        usersRepository = new UserInMemoryRepos();
        makeGetProfile = new ProfileCommand(usersRepository);
    });

    it('it should be able to get user profile', async () => {
        const createdUser = await usersRepository.create({
            name: 'John Doe',
            email: 'johndoe@discente.ifpe.edu.br',
            password: await bcrypt.hash('12345678', 10),
        });

        const { user } = await makeGetProfile.execute({
            userId: createdUser.id,
        });

        expect(user.id).toEqual(expect.any(String));
        expect(user.name).toEqual('John Doe');
    });

    it('it should not be able to get user profile with wrong id', async () => {
        await expect(() =>
            makeGetProfile.execute({
                userId: 'wrong_id',
            }),
        ).rejects.toThrow("Error");
    });
});