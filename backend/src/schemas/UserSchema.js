import { z } from 'zod'

const acceptableEmailProviders = ['discente.ifpe.edu.br', 'doscente.ifpe.edu.br'];

export const registerSchema = z.object({ // Create a type for input values from register 
    name: z.string().min(6).max(24),
    email: z.string().email().refine((email) => {
        const domain = email.split('@')[1]
        return acceptableEmailProviders.includes(domain)
    }, {
        message: "Email provider is not acceptable",
    }),
    registration: z.string().min(14).max(14).toUpperCase(),
    password: z.string().min(8).max(32)
}).required({ // Is needed pass all values
    name: true,
    email: true,
    registration: true,
    password: true
})

export const authenticateSchema = z.object({ // Create a type for input values from auth 
    registration: z.string().min(14).max(14).toUpperCase(),
    password: z.string().min(8).max(32)
}).required({
    registration: true,
    password: true
})

export const removeUser = z.object({
    registration: z.string().min(14).max(14).toUpperCase(),
    email: z.string().email().refine((email) => {
        const domain = email.split('@')[1]
        return acceptableEmailProviders.includes(domain)
    }),
    title: z.string().min(8).max(36),
    description: z.string().min(14).max(70)
}).required({
    registration: true,
    email: true,
    title: true,
    description: true
})