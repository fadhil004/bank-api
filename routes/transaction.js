const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

router.post("/transaction/transfer", transactionController.transfer);

module.exports = router;
