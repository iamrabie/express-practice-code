const express = require('express');
const app = express();

const bodyParser =  require('body-parser');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());

let products = [
    { id:0 , name:'panadol' , price:'100PKR' , category:'medicine'},
    { id:1 , name:'amarbail' , price:'1800PKR' , category:'book'},
    { id:2 , name:'marker' , price:'10PKR' , category:'stationary'},
    { id:3 , name:'pen' , price:'100PKR' , category:'stationary'},
    { id:4 , name:'lays' , price:'100PKR' , category:'food'},
];


app.get('/products' , (req , res , next) => {

    const stationaryItems = products.filter(p => p.category === 'stationary');

    res.status(200).json({data:stationaryItems});

})



app.get('/product/:id' , (req , res , next) => {


    const id = req.params.id;
    const identifiedProduct = products.find(p => p.id == id);


    if (identifiedProduct){
        return res.status(200).json({data:identifiedProduct});

    }

    // else{
        res.status(400).json({data:'could not find the product.'});

    // }

});
 


app.post('/newProduct' , (req , res , next) => {
    const {name , category , price} = req.body;

    products.push({id:uuidv4() , name:name , category:category , price:price});

    console.log('new product' , products );
    res.status(201).json({message:'new data inserted'});
})




app.listen(8005 , () => {
    console.log('http://localhost:8005');
});
