import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { authUser } from '../../../../utils/test/auth-user'
import { server } from '../../../../server'

describe('Remove user', () => {
    it('DELETE /api/me', async () => {
        const token = await authUser(server)

        const user = await request(server)
            .delete('/api/user-remove')
            .send({
                "registration": "20241ADSPL0001",
                "email": "raysamoraes@discente.ifpe.edu.br",
                "title": "Isso, isso, isso e isso...",
                "description": "Ah, sei que la, la sei oque, la que sei e sei que la..."
            })
            .set('Cookie', `accessToken=${token}`)


        expect(user.body.status).toBe(200)
    })
})