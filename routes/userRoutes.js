const express = require("express");
// const auth = require("../middlewares/auth");
const { registerUser } = require("../controllers/userControllers"); 

const router = express.Router();

router.post("/", registerUser);
// router.post("/login", authUser);

module.exports = router;