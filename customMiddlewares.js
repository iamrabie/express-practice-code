module.exports = function (params) {

    return (req , res , next) => {
        console.log(params);
        next();
    }
}
