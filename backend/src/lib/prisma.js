import dotenv from 'dotenv'
dotenv.config()

import { PrismaClient } from "@prisma/client";
import { env } from "../env/index.js";

export const prisma = new PrismaClient({
    log: env.NODE_ENV === 'dev' ? ['query'] : ['error'] // Show a log from executed queries
})