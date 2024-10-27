const mongoose = require("mongoose");

const url = "mongodb://mongo:27017/employee-management-app";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDb;
