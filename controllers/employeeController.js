const models = require("../models/models");
const { EmployeeModel } = models;

const createEmployee = async (req, res, next) => {
  try {
    const { firstName, lastName, department } = req.body;
    const user = await EmployeeModel.create({
      firstName,
      lastName,
      department,
    });
    res.status(201).json({
      success: true,
      message: "Employee added to the DB",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEmployee,
};
