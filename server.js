// Import necessary modules
// ------------------------------------------------
const express = require("express"); // Import the Express framework
const indexRouter = require("./router/index"); // Import the main application routes
const bodyParser = require('body-parser');
require("dotenv").config(); // Load environment variables from .env file
require("./utils/connection"); // Establish database connection

// Create an Express application instance
// ------------------------------------------------
const app = express();

// Use body-parser middleware
// ------------------------------------------------
app.use(bodyParser.json()); // Parse JSON request bodies

// Set up root route
// ------------------------------------------------
app.use("/", indexRouter); // Map the root route to the index routes

// Configure server port
// ------------------------------------------------
const port = process.env.PORT || 27017; // Use port from environment variable or default to 27017

// Start the server
// ------------------------------------------------
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
