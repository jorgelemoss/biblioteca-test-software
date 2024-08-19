/** Imports */
import { env } from './env/index.js'

import http from 'node:http'
import { app } from './app.js'
import { errors } from './errors/serverErrors.js'


// const PORT = process.env?.PORT // Port necessary for server

export const server = http.createServer(app) // Create a Express App Server with node http

/** Server is running on port */
if (env.NODE_ENV !== "test") {
    server.listen(env.PORT, () => {
        try {
            console.log(`Listening at port ${env.PORT} as a ${env.NODE_ENV} 🟢`)

        } catch (err) {
            throw errors.serverRunError

        }
    })
}