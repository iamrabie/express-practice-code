const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name:{type:String , required:true},
        cost:{type:Number , required:true}
    }
);

module.exports = mongoose.model('Product' , ProductSchema);