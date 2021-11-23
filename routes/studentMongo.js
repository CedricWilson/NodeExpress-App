const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentMongoController");

router.get("/", studentController.studentList);
router.get("/clear", studentController.clear);
router.get("/add", studentController.addStudent);

module.exports = router;
