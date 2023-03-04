import type { Channel, User, Message, UserChannels } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  await db.user.createMany({
    data: getUsers(),
  });

  await db.channel.createMany({ data: getChannels() });

  await db.userChannels.createMany({ data: getUserChannels() });

  await db.message.createMany({ data: getMessages() });
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
      id: 1,
    },
    {
      email: 'other@gmail.com',
      birthDate: new Date(),
      // Qwerty1234_
      password: '$2y$10$mNj1SdZuPAmFZd3cbCrluudDyZNh4/ExJZuYi82WiRci1hhwLAzfu',
      username: 'other',
      id: 2,
    },
  ];
}

function getChannels(): Channel[] {
  return [
    {
      creatorId: 1,
      id: '1',
      createdAt: new Date(),
      deletedAt: null,
      updatedAt: new Date(),
      title: "Example Channel",
    },
    {
      creatorId: 2,
      id: '2',
      createdAt: new Date(),
      deletedAt: null,
      updatedAt: new Date(),
      title: "Other Channel",
    },
  ];
}

function getUserChannels(): UserChannels[] {
  return [
    {
      channelId: '1',
      role: 'ADMIN',
      userId: 1,
    },
    {
      channelId: '1',
      role: 'MEMBER',
      userId: 2,
    },
    {
      channelId: '2',
      role: 'ADMIN',
      userId: 2,
    },
  ];
}

function getMessages(): Message[] {
  return [
    {
      channelId: '1',
      id: '1',
      createdAt: new Date(),
      deletedAt: null,
      updatedAt: new Date(),
      content: 'Hello',
      senderId: 1,
    },
    {
      channelId: '1',
      id: '2',
      createdAt: new Date(),
      deletedAt: null,
      updatedAt: new Date(),
      content: 'Hi',
      senderId: 2,
    },
  ];
}
