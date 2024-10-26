const mongoose = require("mongoose");
const { Schema } = mongoose;
import { DepartmentSchema } from "./department";

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  department: {
    type: DepartmentSchema,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
