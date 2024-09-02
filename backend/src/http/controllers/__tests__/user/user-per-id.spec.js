import { describe, expect, it } from "vitest";
import request from "supertest";
import { authUser } from "../../../../utils/test/auth-user";
import { server } from "../../../../server";

describe('Get user data', () => {
    it("GET /user/:id", async () => {
        const token = await authUser(server)

        const userId = await request(server)
            .get('/api/user/2')
            .set('Cookie', `accessToken=${token}`)


        expect(userId.body.status).toBe(200)
    })
})