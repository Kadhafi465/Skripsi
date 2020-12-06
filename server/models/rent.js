"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Rent extends Model {}

  Rent.init(
    {
      tanggal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Tanggal Cannot be empty",
          },
        },
      },
      jam: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Jam Cannot be empty",
          },
        },
      },
      tarif: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Tarif Cannot be empty",
          },
        },
      },
      status_sewa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Status Cannot be empty",
          },
        },
      },
      customerId: DataTypes.INTEGER,
    },
    { sequelize }
  );
  Rent.associate = function (models) {
    Rent.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Rent;
};
