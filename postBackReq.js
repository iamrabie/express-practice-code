const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', (req, res, next) => {

    if (req.url === '/favicon.ico'){
        res.status(204).end(); // Respond with "No Content"

    }

    let response = ''; // This is falsy
    if (response) {
        return next(); // This won't run
    } else {
        // Create a new error and pass it to next
        const err = 'could not access';
        return next(new Error(err)); // This will be caught by error handling middleware
    }
});

// Middleware for handling requests
app.use((req, res, next) => {
    console.log("req received:");
    // res.send("Request handled successfully!"); // This only executes if there's no error
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error handling middleware:", err.message);
    // res.status(500).json({ message: err.message }); // Send error message as JSON response
});

app.listen(8003, () => {
    console.log('http://localhost:8003');
});
