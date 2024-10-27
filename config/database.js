const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/some-mongo";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDb;
