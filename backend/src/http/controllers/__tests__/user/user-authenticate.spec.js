import dotenv from 'dotenv'
dotenv.config({ path: '.env.test' })

import { describe, expect, it } from "vitest";
import request from 'supertest'
import { server } from "../../../../server";

describe('User authenticate', () => {
    it('POST /api/auth', async () => {
        await request(server)
            .post('/api/auth')
            .send({
                "registration": "20241ADSPL0000",
                "password": "12345678"
            })
            .set('Accept', 'application/json')

        expect(200)
    })
})