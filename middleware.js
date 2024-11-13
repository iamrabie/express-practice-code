const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.json());


//basically pass tau hm ise middleware hi main kr rey ahin so params tau must hain phr
const isLoggedIn = (req , res , next) => {
 console.log('log in function' , req.url);
//  if (req.url == '/favicon.ico'){
//     return res.status(204).end(); // Send a 'No Content' response and end the request

//  }
 //agr next() ko comment kr dien tau ye next middleware in line ko access ni kr skta phr
 next();
}


app.use(isLoggedIn);

app.use((req , res , next) => {
    console.log('basic middleware');
    // res.status(200).json({message:'last middleware req-res cycle ended'});
    next();
});

app.get('/' , () => {
    console.log('get request');

});


app.listen(7001 , () => {
    console.log('server running on http://localhost:7001')
})