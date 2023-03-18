const express = require('express');
const router = express.Router();
const dashboardController = require('../../controllers/dashboardController');
// const ROLES_LIST = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(dashboardController.getAllDashboards);

// router.route('/')
//     .get(verifyRoles(ROLES_LIST.User), employeesController.getAllEmployees);

// router.route('/')
//     .get(employeesController.getAllEmployees)
//     .post(employeesController.createNewEmployee)
//     .put(employeesController.updateEmployee)
//     .delete(employeesController.deleteEmployee);

module.exports = router;