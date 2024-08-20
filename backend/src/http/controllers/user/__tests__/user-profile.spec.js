import { describe, it } from 'vitest'
import request from 'supertest'

import { server } from '../../../../server.js'

describe('Get user profile', () => {
    it('GET /api/me', async () => {
        const req = await request(server)
            .get({

            })
    })
})