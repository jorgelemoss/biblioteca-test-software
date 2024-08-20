import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from 'supertest'
import { server } from "../../../../server";
import { env } from "../../../../env";


describe('User authenticate', () => {
    beforeAll((done) => {
        if (!server.listening) {  // Garantir que o servidor seja iniciado uma única vez
            server.listen(process.env.PORT, () => {
                console.log(`Test server running on port ${process.env.PORT}`);
                done();
            });
        } else {
            done();
        }
    })

    afterAll(() => {
        server.close()
    })

    it('POST /api/auth', async () => {
        const res = await request(server)
            .post('/api/auth')
            .send({
                "registration": "20241ADSPL0000",
                "password": "12345678"
            })
            .set('Accept', 'application/json')

        expect(res.statusCode).toEqual(200)
    })
})