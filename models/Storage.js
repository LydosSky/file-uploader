const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getStorageByUserId = (id) =>
  prisma.storage.findFirst({
    where: { userId: id },
    include: { files: true, folders: { include: { files: true } } },
  });
