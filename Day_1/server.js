// Import required modules/dependencies
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config()

// Initialize the express application
const app = express();

// Middleware: Parse incoming JSON requests (securely handles large payloads)
app.use(express.json());

// Define the port (from environment variables or default to 3000)
const PORT = process.env.PORT || 3000;

// Home API
app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'Welcome to my first API',
        status: 'success',
    })
})

// Sample API
app.get('/api', (req, res)=>{
    res.status(200).json({
        data: 'This is the sample data from API',
        message: 'success',
    });
});


// Start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
})