import dotenv from 'dotenv'
dotenv.config()

import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(4000),
    JWT_SECRET: z.string().min(32).default('default1112223334445556667778889')
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    console.error('❌ Invalid environment variables', _env.error.format());

    throw new Error('Invalid environment variables.');
}

export const env = _env.data;