'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rent = sequelize.define('Rent', {
    tanggal: DataTypes.STRING,
    jam: DataTypes.STRING,
    status_sewa: DataTypes.BOOLEAN,
    status_booking: DataTypes.BOOLEAN,
    customerId: DataTypes.INTEGER
  }, {});
  Rent.associate = function(models) {
    // associations can be defined here
  };
  return Rent;
};