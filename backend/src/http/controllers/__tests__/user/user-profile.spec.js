import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { createAndAuthUser } from '../../../../utils/test/create-and-auth-user'
import { server } from '../../../../server'

describe('Get user profile', () => {
    it('GET /api/me', async () => {
        const token = await createAndAuthUser(server)

        const profileRes = await request(server)
            .get('/api/me')
            .set('Authorization', `${token}`)
            .send()

        expect(200)
        expect(profileRes.body.auth)
            .toBe(expect.objectContaining({
                auth: true
            }))
    })
})