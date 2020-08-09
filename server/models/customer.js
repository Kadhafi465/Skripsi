"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  const { bcrypt } = require("../helpers/bcrypt");

  class Customer extends Model {}

  Customer.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Email Cannot be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password Cannot be empty",
          },
        },
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nama Cannot be empty",
          },
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Alamat Cannot be empty",
          },
        },
      },
      telepon: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Telepon Cannot be empty",
          },
        },
      },
      ttl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Tanggal Cannot be empty",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (instance, options) => {
          return bcrypt(instance.password).then((bcrypt) => {
            instance.password = bcrypt;
          });
        },
      },
      sequelize,
    }
  );
  Customer.associate = function (models) {
    Customer.hasMany(models.Rent, { foreignKey: "customerId" });
  };
  return Customer;
};
