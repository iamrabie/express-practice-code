const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/admin.controller');

router.use('/' ,(req , res , next) => {
    console.log('admin generuc middleware');
    next();
});


router.get('/admin' , controllers.getAdmins);

router.get('/admin/:id' , controllers.getAdminById);

router.post('/admin/login' , controllers.handleLogin);



module.exports = router;