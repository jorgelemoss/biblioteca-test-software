import dotenv from 'dotenv'
dotenv.config()

import { PrismaClient } from "@prisma/client";
import { env } from "process";

export const prisma = new PrismaClient({
    log: env.NODE_ENV === 'dev' ? ['query'] : ['error'] // Exibe um log de queries executadas
})