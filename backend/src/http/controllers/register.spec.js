import dotenv from "dotenv"
dotenv.config({ path: '.env.test' })

import { beforeAll, afterAll, test, expect, describe, it } from "vitest";
import request from 'supertest'
import { env } from "../../env";
import { server } from "../../server";

describe('Register', () => {

    beforeAll(() => {
        server.listen(env.PORT, () => {
            console.log(`Server test is running on ${env.PORT} as a ${env.NODE_ENV}`)
        })
    })

    afterAll(() => {
        server.close()
    })

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

        expect(res.statusCode).toEqual(200)
    })
})
