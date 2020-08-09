'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.STRING
      },
      jam: {
        type: Sequelize.STRING
      },
      tarif: {
        type: Sequelize.INTEGER
      },
      status_sewa: {
        type: Sequelize.BOOLEAN
      },
      status_booking: {
        type: Sequelize.BOOLEAN
      },
      customerId: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rents');
  }
};