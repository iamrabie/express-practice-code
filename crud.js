const express = require('express');
const app = express();
const practiceModule = require("./practice");

const bodyParser =  require('body-parser');
const { v4: uuidv4 } = require('uuid');


let users = [
    { id : 0, name:'Khizer' , email:'abc@gmail.com'},
    { id : 1, name:'Ali' , email:'abc@gmail.com'},
    { id : 2, name:'Salaar' , email:'abc@gmail.com'}
];

app.use(bodyParser.json());




app.get('/users' , (req , res , next) => {
    res.status(200).json({message:'users path' , data:users , success:true});
})


app.get('/users/:id' , (req , res , next) => {

    const uid = req.params.id;
    console.log("uid " , uid);

    const identifyUser = users.find(u => u.id == uid);

    console.log('is user identified?' , identifyUser);


    if ( identifyUser){
        res.status(200).json({message:'user fetched successfully' , data:identifyUser});
    }

    else{
        res.status(500).json({message:'user NOT found'});

    }
});


app.post('/api/addUser' , (req , res , next) => {

     const { name , email } = req.body;


     let createUser = {
        id:uuidv4(),
        name,
        email
     }


     users.push(createUser);

     if (!email || !name){
        return res.status(401).json({message:'could not create user' , success:false});
     }
    
    console.log('new user :' , createUser);
    res.status(200).json({success:true , message:'user added successfully!' , data:createUser});

});





app.patch('/users/:uid' , (req , res , next) => {

    const id = req.params.uid;
    const { name , email } = req.body;
    const updateUser = users.find( u => u.id == id);
    console.log('is user present?' , updateUser);

    if (updateUser){

        const index = users.findIndex(u => u.id == id);
        console.log('index' , index);
        users[index] = {id:id , name:name , email:email};

        res.status(200).json({msg:'user is present , updated user is attached.' , data:{name:name , email:email}});
    }

    else{
        res.status(404).json({msg:'user not found'});
        // let err =  'user not found';
        // next(new Error(err));

    }


});



app.delete('/users/:uid' , (req , res , next) => {

    const id = req.params.uid;

    const isUserPresent = users.find( u => u.id == id);

    if (isUserPresent){

        const deleteUser = users.filter(u => u.id != id);
        console.log('users list' , deleteUser);
    
        users = deleteUser;
        res.status(200).json({messgae:'user deleted successfully'});
        
    }
   

    else{
        res.status(400).json({messgae:'could not delete the user, user doesnt exists.'});

    }


})


app.use((req , res , error , next) => {

    // console.log('error is ' , req);
    res.status(500).json({err:err});
})


app.listen(8003 , () => {
    console.log('http://localhost:8003');
});

