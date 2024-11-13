const express = require('express');
const app = express();
const mw = require('./my-middleware.js');



//middleware funnctions;
const handleGetFood = (req , res , next) => {
    console.log('get foof by id');
    next();
}

const handleUpdateFood =  (req , res , next) => {
    console.log('update food api');
    next();
}

const handleDeleteFood = (req , res , end) => {
    console.log('delete food api');
    // next();
}


//custom middleware
app.use(mw('custom middleware 1'));
app.use(mw('custom middleware 2'));


//application level middleware
app.use((req , res , next) => {
    console.log('a simple use middleware');
    next();
});


//routes handling middleware
app.get('/' , (req , res , next) => {
    console.log('get req');
    next();
});


app.post('/api/food' , (req , res , next) => {
    console.log('post food api');
    next();
});

app.get('/api/food/:id' , handleGetFood);

app.patch('/api/food/:id' , handleUpdateFood);

app.delete('/api/food/:id' , handleDeleteFood);



// app.route() middleware;
// app.route('/api/food/:id')
// .all((req , res , next) => {
//     console.log('logged with all the routes');
//     next();
// })
// .get(handleGetFood)
// .patch(handleUpdateFood)
// .delete(handleDeleteFood);




app.listen(7003 , () => {
    console.log('server running on http://localhost:7003');
})