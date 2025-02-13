const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// CRUD for user, update not necessary there is nothing to update
exports.createUser = (user) => prisma.user.create({ data: user });
exports.getUserById = (id) => prisma.user.findUnique({ where: { id } });
exports.getUserByUsername = (username) =>
  prisma.user.findUnique({ where: { username } });
exports.getUsers = () => prisma.user.findMany();
exports.deleteUser = (id) => prisma.user.delete({ where: { id } });
