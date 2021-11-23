const StudentModel = require("../models/studentModel");

const studentList = (req, res) => {
  StudentModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.send("Error"));
};

const addStudent = (req, res) => {
  const studentModel = new StudentModel({
    id: 1,
    name: "Cedric",
    phone: "9867359291",
  });

  studentModel
    .save()
    .then((result) => res.send("Student Added! = " + result))
    .catch((err) => res.send(err));
};

const clear = (req, res) => {
  StudentModel.deleteMany()
    .then((result) => {
      res.send("Records Cleared!");
    })
    .catch((err) => {
      res.send(err);
    });
  //   StudentModel.remove
  //     .then((result) => {
  //       res.send("Records Cleared!");
  //     })
  //     .catch((err) => {
  //       res.send(err);
  //     });
};

module.exports = {
  studentList,
  addStudent,
  clear,
};
