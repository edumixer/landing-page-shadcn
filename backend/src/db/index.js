import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("Conexão bem-sucedida!");
  } catch (error) {
    console.error("Erro na conexão:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

export default prisma;
