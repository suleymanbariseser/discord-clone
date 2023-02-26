import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    })
  );
}

seed();

function getUsers(): User[] {
  return [
    {
        email: 'example@gmail.com',
        birthDate: new Date(),
        // hashed Qq12345678_
        password: '$2y$10$YS9f.WnJlLXansga/xMxauMteH/e.5KnD2BeTTnyv/oQoSxcOcLYu',
        username: 'example',
        id: 1
    },
    {
        email: 'other@gmail.com',
        birthDate: new Date(),
        // Qwerty1234_
        password: '$2y$10$mNj1SdZuPAmFZd3cbCrluudDyZNh4/ExJZuYi82WiRci1hhwLAzfu',
        username: 'other',
        id: 2
    }
  ];
}