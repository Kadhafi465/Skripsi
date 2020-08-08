"use strict";

const { options } = require("../routes");

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  const { bcrypt } = require("../helpers/bcrypt");

  class User extends Model {}

  User.init(
    {
      username: {
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
