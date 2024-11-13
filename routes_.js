const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mw = require('./customMiddlewares');



app.use((req , res , next) =>{
    console.log('BASIC middleware');
    next();
})
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
    next();
}


app.use(mw('custom middlware __'));

app.get('/' , mw('get food api __'));


app.post('/api/food' , mw('post food api __'));




app.route('/api/food/:id')
.all((req , res , next) => {
    console.log('all method');
    next();
})
.get((req , res , next) => {
    console.log('get foof by id');
    next();
}
)
.patch(handleUpdateFood)
.delete(handleDeleteFood);



// app.get('/api/food/:id' , (req , res , next) => {
//     console.log('get by id food api');
//     next();
// });

// app.patch('/api/food/:id' , (req , res , next) => {
//     console.log('update food api');
//     next();
// });

// app.delete('/api/food/:id' , (req , res , next) => {
//     console.log('delete food api');
// });



app.listen(7004 , () => {
    console.log('server running on http://localhost:7004');
})