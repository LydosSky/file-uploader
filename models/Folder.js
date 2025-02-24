const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createFolder = (folder) =>
    prisma.folder.create({ data: { ...folder } });

exports.getFolders = () =>
    prisma.folder.findMany({
        include: {
            files: true,
        },
    });

exports.getFolderById = (id) => prisma.folder.findUnique({ where: { id } });

exports.updateFolder = (folder) =>
    prisma.folder.update({
        where: { id: folder.id },
        data: { name: folder.name },
    });

exports.deleteFolder = (id) => prisma.folder.delete({ where: { id } });
