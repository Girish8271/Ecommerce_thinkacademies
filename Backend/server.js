const express = require('express');
const connectToMongoDB = require('./database/database'); // Assuming database connection logic is in this file
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRoute'); // Import the AuthRouter

const app = express();
require('dotenv').config(); // Load environment variables

const PORT = process.env.PORT || 8000;

// Middleware Setup
app.use(bodyParser.json()); // Body parser to handle JSON requests
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded data

// Example route (you can expand this later)
app.get('/user', (req, res) => {
    res.send("User data");
});

// Use AuthRouter for all authentication-related routes
app.use('/api', AuthRouter); // Prefix your Auth routes with '/api/auth' for clarity and RESTful design

// Error handling middleware for better logging and response
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Centralized Error Handler (Global Error Handler)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: err.message
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});

// Connect to MongoDB
connectToMongoDB();
