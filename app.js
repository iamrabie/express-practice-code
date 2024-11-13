const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const admin_routes = require('./routes/admin/admin');
const employees_routes = require('./routes/employees/employees');
const users_routes = require('./routes/users/users');


app.use(bodyParser.json());

// app.use((req , res , next) => {
//     console.log('application level middleware');
//     next();
// });

app.use(admin_routes);
app.use(employees_routes);
app.use(users_routes);




app.listen(9090 , () => {
    console.log('server running on http://localhost:9090');
})