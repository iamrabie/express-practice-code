const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const dbMethods = require('./mongo');
const mongooose = require('./mongoose');


app.use(bodyParser.json());
app.get("/products" , mongooose.getProducts);
app.post("/products" , mongooose.createProduct);
// app.get('/products' , dbMethods.getProducts);
// app.post('/products' , dbMethods.createProduct);


app.listen(9090 , () => {
    console.log('server running on http://localhost:9090');
})