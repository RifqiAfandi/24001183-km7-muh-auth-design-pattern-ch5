'use strict';

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const saltRounds = 10;
    const hashedPasswords = await Promise.all([
      bcrypt.hash('super123', saltRounds),
      bcrypt.hash('admin123', saltRounds),
      bcrypt.hash('user123', saltRounds)
    ]);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'SuperAdmin',
        age: 20,
        role: 'Super Admin',
        email: 'super.admin@example.com',
        password: hashedPasswords[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Admin',
        age: 20,
        role: 'Admin',
        email: 'admin@example.com',
        password: hashedPasswords[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User1',
        age: 20,
        role: 'Member',
        email: 'user1@example.com',
        password: hashedPasswords[2],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};