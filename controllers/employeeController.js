const Employee = require("../models/employee");

const createEmployee = async (req, res, next) => {
  try {
    const { firstName, lastName, department } = req.body;
    const user = await Employee.create({ firstName, lastName, department });
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
