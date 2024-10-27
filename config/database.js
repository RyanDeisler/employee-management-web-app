const mongoose = require("mongoose");

const url = process.env.MONGO_URI || "mongodb://localhost:27017";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDb;
