const express = require('express');
const router = express.Router();

router.get('/employees' , (req , res , next) => {
    console.log('employees GET api');
});


router.get('/employee/:id' , (req , res , next) => {
    console.log('employees GET by id api');
});

router.post('/employee/login' , (req , res , next) => {
    console.log('employees  POST api');
});



module.exports = router;