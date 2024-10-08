import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { authUser } from '../../../../utils/test/auth-user'
import { server } from '../../../../server'

describe('Get user profile', () => {
    it('GET /api/me', async () => {
        const token = await authUser(server)

        const profileRes = await request(server)
            .get('/api/me')
            .set('Cookie', `accessToken=${token}`)

        expect(profileRes.body.status).toEqual(200)
    })
})