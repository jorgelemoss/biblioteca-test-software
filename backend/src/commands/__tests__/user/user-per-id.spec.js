import { expect, describe, it, beforeEach } from 'vitest';
import { hash } from 'bcryptjs';


let usersRepository
let sut

describe('Get User Profile Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        sut = new GetUserProfileUseCase(usersRepository);
    });

    it('it should be able to get user profile', async () => {
        const createdUser = await usersRepository.create({
            name: 'John Doe',
            email: 'mane@qualquer.com',
            password_hash: await hash('123456', 6),
        });

        const { user } = await sut.execute({
            userId: createdUser.id,
        });

        expect(user.id).toEqual(expect.any(String));
        expect(user.name).toEqual('John Doe');
    });

    it('it should not be able to get user profile with wrong id', async () => {
        await expect(() =>
            sut.execute({
                userId: 'wrong_id',
            }),
        ).rejects.toBeInstanceOf(ResourceNotFoundError);
    });
});