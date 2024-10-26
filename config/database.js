const mongoose = require("mongoose");

const url = "mongodb://mongo:27017/employee-management-app";

const connectDb = () => {
  mongoose.connect(url, () => {
    console.log("Connected to MongoDB!");
  });
};

module.exports = connectDb;