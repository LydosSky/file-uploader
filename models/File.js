const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createFile = (file) => prisma.file.create({ data: file });
exports.getFiles = () => prisma.file.findMany();
exports.getFileById = (id) =>
  prisma.file.findFirst({
    where: { id },
    include: {
      folder: true,
    },
  });
exports.deleteFile = (id) => prisma.file.delete({ where: { id } });
