const fake = require("../utils/fake_data");
const Joi = require("joi");
const students = new fake().students;


const studentList = (req, res) => {
  res.send(JSON.stringify(students));
};

const studentyById = (req, res) => {
  var student = students.find((s) => s.id === parseInt(req.params.id));

  if (!student) {
    res.status(404).send("No Student Found");
  } else {
    res.send(student);
  }
};

const addStudent = (req, res) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).required(),
//   });

//   const result = schema.validate(req.body);

//   if (result.error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }

//   const student = {
//     id: students.length + 1,
//     name: req.body.name,
//   };
//   students.push(student);



  res.send(JSON.stringify("Student Added"));
};

const updateStudent = (req, res) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);

  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  var student = students.find((s) => s.id === parseInt(req.body.id));

  if (!student) {
    return res.status(404).send("No Student Found");
  } else {
    student.name = req.body.name;
    return res.send("Student Updated");
  }
};

module.exports = {
  studentList,
  studentyById,
  addStudent,
  updateStudent,
};
