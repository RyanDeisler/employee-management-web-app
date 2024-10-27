const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.post("/createEmployee", employeeController.createEmployee);
router.get("/getAllEmployees", employeeController.getAllEmployees);
router.delete("/deleteAllEmployees", employeeController.deleteAllEmployees);

module.exports = router;
