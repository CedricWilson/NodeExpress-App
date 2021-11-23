const express = require("express");
const router = express.Router();
const blogController = require("../controllers/studentController");

router.get("/", blogController.studentList);
router.get("/:id", blogController.studentyById);
router.post("/addstudent", blogController.addStudent);
router.post("/updatestudent", blogController.updateStudent);

module.exports = router;

