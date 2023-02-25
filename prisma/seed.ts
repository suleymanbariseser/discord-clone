import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map((joke) => {
      return db.user.create({ data: joke });
    })
  );
}

seed();

function getJokes(): User[] {
  return [
    {
        email: 'example@gmail.com',
        birthDate: new Date(),
        password: 'Qq12345678',
        username: 'example',
        id: 1
    },
    {
        email: 'other@gmail.com',
        birthDate: new Date(),
        password: 'Qq12345678',
        username: 'other',
        id: 2
    }
  ];
}