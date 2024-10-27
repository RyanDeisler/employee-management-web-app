const models = require("../models/models");
const { EmployeeModel, DepartmentModel } = models;

const createEmployee = async (req, res, next) => {
  try {
    let { firstName, lastName, department } = req.body;

    const existingEmployee = await EmployeeModel.exists({
      firstName,
      lastName,
    });
    if (!existingEmployee) {
      let existingDepartment = await DepartmentModel.exists({
        departmentName: department,
      });
      if (!existingDepartment) {
        existingDepartment = await DepartmentModel.create({
          departmentName: department,
        });
      }
      console.log(department, "department");
      console.log(
        existingDepartment.departmentName,
        "existing department name"
      );
      const user = await EmployeeModel.create({
        firstName,
        lastName,
        department: existingDepartment,
      });
      res.status(201).json({
        success: true,
        message: "Employee added to the DB",
        data: user,
      });
    } else {
      res.status(409).send("Employee already exists");
    }
  } catch (error) {
    next(error);
  }
};

const getAllEmployees = async (req, res, next) => {
  try {
    const query = await EmployeeModel.find({});
    res.status(200).json({ data: query });
  } catch (error) {
    next(error);
  }
};

const deleteAllEmployees = async (req, res, next) => {
  try {
    const query = await EmployeeModel.deleteMany({});
    res.status(200).json({ message: "Deleted all employees", data: query });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  deleteAllEmployees,
};
