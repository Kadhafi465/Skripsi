const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { compare } = require("../helpers/bcrypt");

class UserController {
  static register(req, res) {
    const { username, password } = req.body;
    let option = { where: { username } };
    User.findOne(option)
      .then((data) => {
        if (data) {
          res.status(400).json({
            message: "User already exist",
          });
        } else {
          return User.create({ username, password });
        }
      })
      .then((user) => {
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
          },
          process.env.SECRET
        );
        res.status(201).json({ username, token });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal Service Error",
        });
      });
  }

  static login(req, res) {
    const { username, password } = req.body;
    let option = { where: { username } };
    User.findOne(option)
      .then((user) => {
        if (!user) {
          res.status(404).json({
            message: "User Not Found",
          });
        } else {
          if (compare(password, user.password)) {
            const token = jwt.sign(
              {
                id: user.id,
                username: user.username,
              },
              process.env.SECRET
            );
            res.status(201).json({ username, token });
          } else {
            res.status(400).json({
              message: "wrong password",
            });
          }
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal Service Error",
        });
      });
  }
}

module.exports = UserController;
