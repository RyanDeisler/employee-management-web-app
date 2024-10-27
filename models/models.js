const mongoose = require("mongoose");
const { Schema } = mongoose;

const DepartmentSchema = new Schema({
  departmentName: {
    type: String,
    required: true,
    unique: true,
  },
});

const EmployeeSchema = new Schema({
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

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
const DepartmentModel = mongoose.model("Department", DepartmentSchema);
module.exports = { EmployeeModel, DepartmentModel };
