const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// CRUD for user, update not necessary there is nothing to update
/**
 * A user is an object
 * @param {object} user
 * {
 *   @property {string} username
 *   @property {string} email
 *   @property {string} password_hash
 * }
 * */
exports.createUser = (user) =>
  prisma.user.create({
    data: { ...user, storage: { create: {} } },
    include: { storage: true },
  });

/**
 * @param {number} id
 * */
exports.getUserById = (id) =>
  prisma.user.findUnique({ where: { id }, include: { storage: true } });
/**
 * @param {string} username
 * */
exports.getUserByUsername = (username) =>
  prisma.user.findUnique({ where: { username } });

exports.getUsers = () => prisma.user.findMany({ include: { storage: true } });
/**
 * @param {number} id
 * */
exports.deleteUser = (id) => prisma.user.delete({ where: { id } });
