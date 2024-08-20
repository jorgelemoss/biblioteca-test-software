import dotenv from "dotenv"
dotenv.config({ path: '.env.test' })

import { expect, describe, it } from "vitest";
import request from 'supertest'
import { server } from "../../../server";

describe('User register', () => {
    it('Should be register', async () => {
        const res = await request(server)
            .post('/api/user')
            .send({
                "name": "John Doe",
                "email": "johndoe@discente.ifpe.edu.br",
                "registration": "20241ADSPL0000",
                "password": "12345678"
            })
            .set('Accept', 'application/json')

        expect(200)
    })
})
