const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://zahidrabia048:UVPRcdYnvJRQKM3G@cluster0.1mqdy.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0"

const getProducts = () => {
  

}



const createProduct = async(req , res , next) => {
     
    const { name , price } = req.body;
    const createProduct = {
        name:name,
        cost:price
    }

     const client = new MongoClient(url);

    try{
       
        const connection = await client.connect();
        const database = await client.db();
        const collection = await database.collection('products_').insertOne(createProduct);
    }

    catch(err){
         console.log('could not insert into mongo db');
    }

    client.close();

}



module.exports = { getProducts , createProduct}