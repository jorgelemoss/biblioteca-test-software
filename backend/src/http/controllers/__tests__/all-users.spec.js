import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { authUser } from '../../../../utils/test/auth-user'
import { server } from '../../../../server'

describe('Get all users', () => {
    it('GET /api/all-users', async () => {
        const token = await authUser(server)

        const allUsers = await request(server)
            .get('/api/all-users')
            .set('Cookie', `accessToken=${token}`)


        expect(allUsers.body.status).toBe(200)
    })
})