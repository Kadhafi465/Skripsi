const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.getAll);
router.post("/register", CustomerController.register);
router.post("/login", CustomerController.login);
router.delete("/:id", CustomerController.delete);

module.exports = router;
