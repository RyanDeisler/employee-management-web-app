const express = require("express");

const app = express();

const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello, welcome to Docker Daemon!");
});

app.get("/test", (req, res) => {
  res.send("This is a custom test!");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
