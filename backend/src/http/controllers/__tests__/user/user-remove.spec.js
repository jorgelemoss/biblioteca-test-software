import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { authUser } from '../../../../utils/test/auth-user'
import { server } from '../../../../server'

describe('Remove user', () => {
    it('GET /api/me', async () => {
        const token = await authUser(server)

        const profileRes = await request(server)
            .get('/api/user-remove')
            .set('Cookie', `accessToken=${token}`)

        expect(profileRes.body.status).toBe(200)
    })
})