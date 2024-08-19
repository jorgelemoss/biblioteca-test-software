import { beforeAll, afterAll, test, expect, describe } from "vitest";
import request from 'supertest'
import { app } from "../../app";
import { env } from "../../env";

let server

describe('Register', () => {

    beforeAll((done) => {
        server = app.listen(env.PORT, () => {
            console.log(`Server test is running on ${env.PORT}`)
            done()
        })
    })

    afterAll(() => {
        server.close()
    })
})

test('Should make a register request', async () => {
    const res = await request(server).post('/api/user')
    expect(res.status).toBe(200)
})