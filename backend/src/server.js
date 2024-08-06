/** Imports */
import http from 'node:http'
import { app } from './app.js'

const PORT = process.env?.PORT || 4000 // Port necessary for server

const server = http.createServer(app) // Create a Express App Server with node http

/** Server is running on port */
server.listen(Number(PORT), () => {

    try {
        console.log(`Listening at port ${PORT} 🟢`)
    } catch (err) {

        throw new Error("Have an error 🔴")
    }
})