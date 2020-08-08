const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", (req, res) => res.json({ message: "Welcome to Futsal Application" }));
router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
