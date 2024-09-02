import request from 'supertest'
/** Used only for @Tests */

export const authUser = async (server) => {

    const authResponse = await request(server)
        .post('/api/auth')
        .send({
            registration: "20241ADSPL0000",
            password: "12345678"
        })


    const cookies = authResponse.headers['set-cookie']
    const token = cookies?.find((cookie) => cookie.startsWith('accessToken='))
    const accessToken = token?.split(';')[0].split('=')[1]

    return accessToken
}