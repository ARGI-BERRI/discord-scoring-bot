import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

setInterval(() => {
    console.log("ALIVE?");
}, 1000)

await prisma.$disconnect()