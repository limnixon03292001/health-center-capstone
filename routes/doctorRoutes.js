const express = require("express");
const auth = require("../middlewares/auth");
const { registerDoctor, getDoctor, addSchedule, getSchedule } = require("../controllers/doctorControllers"); 

const router = express.Router();

router.post("/register", auth, registerDoctor);
router.get("/", auth, getDoctor);

//this route is for doctor schedule
router.get("/get-schedule", auth, getSchedule);
router.post("/add-schedule", auth, addSchedule);


module.exports = router;