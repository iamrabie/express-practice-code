const getAdmins = (req , res , next) => {
    console.log('admin GET api');
    next();
}


const getAdminById =  (req , res , next) => {
    console.log('admin GET by id api');
    next();
}


const handleLogin = (req , res , next) => {
    console.log('admin POST api');
    next();
}


module.exports = { getAdmins , getAdminById , handleLogin};