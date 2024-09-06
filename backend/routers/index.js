const express = require("express");
const user_router = require("./user");
const account_router = require("./account");

const router = express.Router();
router.use("/user",user_router);
router.use("/account",account_router);

module.exports = router;