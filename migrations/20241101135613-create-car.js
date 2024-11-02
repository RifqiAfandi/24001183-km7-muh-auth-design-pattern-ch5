'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.BIGINT
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      createdBy: {
        type: Sequelize.STRING
      },
      lastUpdatedBy: {
        type: Sequelize.STRING
      },
      deletedBy: {
        type: Sequelize.STRING
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};