const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./config/database");

const app = express();

connectDb();
const port = process.env.NODE_LOCAL_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello, welcome to Docker Daemon!");
});

app.get("/test", (req, res) => {
  res.send("This is a custom test!");
});

app.use("/", require("./routes/employee"));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
