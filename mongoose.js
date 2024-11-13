const mongoose = require('mongoose');
const Schema = require('./models/products');
mongoose.connect("mongodb+srv://zahidrabia048:UVPRcdYnvJRQKM3G@cluster0.1mqdy.mongodb.net/products_test?retryWrites=true&w=majority&appName=Cluster0").
then(() => {
    console.log('connection established successfully!');
}).catch(() => {
    console.log('unable to connect the server to the database');
});


const createProduct = (req , res , next) => {

    const { name , price } = req.body;

    const createdProduct = new Schema({
        name:name,
        cost:price
    });

    const result = createdProduct.save();
}


const getProducts = async (req , res , next) => {
    const products = await Schema.find().exec();
    res.json(products);
}

exports.getProducts = getProducts;
exports.createProduct = createProduct;
// module.exports = createProduct;