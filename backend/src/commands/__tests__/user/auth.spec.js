import { expect, describe, it, beforeEach } from 'vitest';
import bcrypt from 'bcrypt';
import { UserInMemoryRepos } from '../../../repositories/in-memory/UserInMemoryRepos';
import AuthenticateCommand from '../../user/authenticate.command';


let usersRepository;
let makeAuth;

describe('Authenticate Use Case', () => {
    beforeEach(() => {
        usersRepository = new UserInMemoryRepos();
        makeAuth = new AuthenticateCommand(usersRepository);
    });

    it('it should be able to authenticate', async () => {
        await usersRepository.create({
            name: "John Doe",
            email: "johndoe@discente.ifpe.edu.br",
            registration: "20241ADSPL0000",
            password: await bcrypt.hash("12345678", 10),
            role: "Admin"
        });

        const { user } = await makeAuth.execute({
            registration: "20241ADSPL0000",
            password: "12345678"
        });

        expect(user.id).toEqual(expect.any(String));
    });

    it('it should not be able to authenticate with wrong registration', async () => {
        await expect(makeAuth.execute({
            registration: "20241ADSPL9999", // Um registro que não existe
            password: "12345678"
        })).rejects.toThrow("User not exists, try again.");
    });


    it('it should not be able to authenticate with wrong password', async () => {
        await usersRepository.create({
            registration: "20241ADSPL0000",
            password: await bcrypt.hash('12345678', 10),
        });

        await expect(makeAuth.execute({
            registration: "20241ADSPL0000",
            password: '123456789',
        })).rejects.toThrow("Password not match");
    });
});