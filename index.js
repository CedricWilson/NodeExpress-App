const express = require("express");
const studentRoute = require("./routes/studentRoutes");
const studentMongoRoute = require("./routes/studentMongo");

const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const db =
  "mongodb+srv://vscode-dell:fPXdH5RQJo3cVzk1@cluster0.ysrtf.mongodb.net/mongo-test?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then((res) => {
    console.log("Connected to DB!");
    app.listen(port, () => console.log("Listening to " + port + ".."));
  })
  .catch((err) => console.log(err));
/////////////////////////////////

app.get("/", (req, res) => {
  res.send("Welcome to App");
});



app.use("/students", studentRoute);
app.use("/test", studentMongoRoute);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const port = process.env.port || 3000;
