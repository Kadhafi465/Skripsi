const { Customer } = require("../models");
const jwt = require("jsonwebtoken");
const { compare } = require("../helpers/bcrypt");

class CustomerController {
  static register(req, res) {
    const { email, password, nama, alamat, telepon, ttl } = req.body;
    let option = { where: { email } };
    Customer.findOne(option)
      .then((data) => {
        if (data) {
          res.status(400).json({ message: "Email already exist" });
        } else {
          return Customer.create({ email, password, nama, alamat, telepon, ttl });
        }
      })
      .then((user) => {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          process.env.SECRET
        );
        res.status(201).json({ nama, token });
      })
      .catch((err) => {
        if (err.errors) {
          let errData = [];
          for (let i = 0; i < err.errors.length; i++) {
            errData.push({ message: err.errors[i].message });
          }
          res.status(400).json(errData);
        } else {
          res.status(500).json({
            message: "Internal server Error",
          });
        }
      });
  }

  static login(req, res) {
    const { email, password } = req.body;
    let option = { where: { email } };
    Customer.findOne(option)
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "email cannot be found" });
        } else {
          const nama = user.nama;
          if (compare(password, user.password)) {
            const token = jwt.sign(
              {
                id: user.id,
                email: user.email,
              },
              process.env.SECRET
            );
            res.status(201).json({ nama, token });
          } else {
            res.status(400).json({
              message: "wrong password",
            });
          }
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Service Error" });
      });
  }

  static getAll(req, res) {
    Customer.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal Server Error",
        });
      });
  }

  static delete(req, res) {
    const option = { where: { id: req.params.id } };
    let deleteData = null;
    Customer.findOne(option)
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: "Data Not Found",
          });
        } else {
          deleteData = data;
          return Customer.destroy(option);
        }
      })
      .then(() => {
        res.status(200).json({
          deleteData,
          message: "Has been Deleted",
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal server Error",
        });
      });
  }
}

module.exports = CustomerController;
