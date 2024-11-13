const express = require('express');
const router = express.Router();

console.log('router middleware');

router.get('/users' , (req , res , next) => {
    console.log('users GET api');
});

router.get('/user/:id' , (req , res , next) => {
    console.log('user GET by id api');
});

router.post('/user/login' , (req , res , next) => {
    console.log('user POST api');
});



module.exports = router;