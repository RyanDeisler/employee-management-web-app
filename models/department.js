const mongoose = require("mongoose");
const { Schema } = mongoose;

export const DepartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Department", departmentSchema);
