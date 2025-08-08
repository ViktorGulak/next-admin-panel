import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => new PrismaClient()

const prisma = globalThis.prisma || prismaClientSingleton()

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma