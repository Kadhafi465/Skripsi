"use strict";

const { options } = require("../routes");

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  const { bcrypt } = require("../helpers/bcrypt");

  class User extends Model {}

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Username Cannot be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password cannot be empty",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Role Cannot be empty",
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

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
