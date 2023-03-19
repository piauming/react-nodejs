const express = require('express');
const router = express.Router();
// const ROLES_LIST = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');

// define the home page route
router.get('/', (req, res) => {
    res.send({ "valid": true })
})

// router.route('/')
//     .get(verifyRoles(ROLES_LIST.User), employeesController.getAllEmployees);

// router.route('/')
//     .get(employeesController.getAllEmployees)
//     .post(employeesController.createNewEmployee)
//     .put(employeesController.updateEmployee)
//     .delete(employeesController.deleteEmployee);

module.exports = router;