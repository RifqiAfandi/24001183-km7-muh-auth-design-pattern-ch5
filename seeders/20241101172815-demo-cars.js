'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [
      {
        model: 'Civic',
        brand: 'Honda',
        year: 2019,
        number: 'B1234XYZ',
        price: 20000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Camry',
        brand: 'Toyota',
        year: 2021,
        number: 'B5678ABC',
        price: 30000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Accord',
        brand: 'Honda',
        year: 2020,
        number: 'B9101DEF',
        price: 25000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'X-Trail',
        brand: 'Nissan',
        year: 2018,
        number: 'B1122GHI',
        price: 18000000,
        available: false,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Fortuner',
        brand: 'Toyota',
        year: 2017,
        number: 'B1314JKL',
        price: 35000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Jazz',
        brand: 'Honda',
        year: 2016,
        number: 'B1516MNO',
        price: 15000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'CR-V',
        brand: 'Honda',
        year: 2022,
        number: 'B1718PQR',
        price: 40000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Altis',
        brand: 'Toyota',
        year: 2020,
        number: 'B1920STU',
        price: 28000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Outlander',
        brand: 'Mitsubishi',
        year: 2018,
        number: 'B2122VWX',
        price: 22000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Pajero',
        brand: 'Mitsubishi',
        year: 2021,
        number: 'B2324YZA',
        price: 45000000,
        available: true,
        createdBy: "Admin",
        lastUpdatedBy: "Admin",
        deletedBy: null,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
