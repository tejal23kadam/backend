const express = require('express');
const router = express.Router();
const { checkConnemp, addEmployee, updateEmployee, getAllEmployee, deteleEmployee, validatEmployee} = require('../controllers/employee_controller')

router.get('/conncheckemp', checkConnemp);
router.post('/addnewEmployee', addEmployee);
// router.put('/updateStudent/:id', updateStudent)
// router.get('/allStudent', getAllStudent)
// router.delete('/deleteStudent/:id', deteleStudent)
// router.post('/validateStudent', validateStudent);



module.exports = router