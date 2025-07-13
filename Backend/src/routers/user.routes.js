const express = require("express");

const router = express.Router();

const { addUser, findMatch } = require("../controllers/user.controller.js");

// add user route
router.post("/addUser", addUser);
// findMatch route
router.get("/matches/:userName", findMatch);

module.exports = router;
