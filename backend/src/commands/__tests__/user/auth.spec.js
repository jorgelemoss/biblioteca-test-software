import { expect, describe, it, beforeEach } from 'vitest';
import bcrypt from 'bcryptjs';
import { InMemoryUsersRepository } from '../../../repositories/in-memory/UserInMemoryRepos';
import AuthenticateCommand from '../../user/authenticate.command';


let usersRepository;
let makeAuth;

describe('Authenticate Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        makeAuth = new AuthenticateCommand(usersRepository);
    });

    it('it should be able to authenticate', async () => {
        await usersRepository.create({
            name: 'John Doe',
            email: 'johndoe@discente.ifpe.edu.br',
            password: await bcrypt.hash('12345678', 10),
        });

        const { user } = await makeAuth.execute({
            email: 'johndoe@discente.ifpe.edu.br',
            password: '12345678',
        });

        expect(user.id).toEqual(expect.any(String));
    });

    it('it should not be able to authenticate with wrong email', async () => {
        await expect(() =>
            makeAuth.execute({
                email: 'johndoe@discente.ifpe.edu.br',
                password: '12345678',
            }),
        ).rejects.toBeInstanceOf(InvalidCredentialsError);
    });

    it('it should not be able to authenticate with wrong password', async () => {
        await usersRepository.create({
            name: 'John Doe',
            email: 'johndoe@discente.ifpe.edu.br',
            password: await bcrypt.hash('12345678', 10),
        });

        await expect(() =>
            makeAuth.execute({
                email: 'johndoe@discente.ifpe.edu.br',
                password: '12345678',
            }),
        ).rejects.toBeInstanceOf(InvalidCredentialsError);
    });
});