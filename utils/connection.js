// Import the `mongoose` module.
// -------------------------------
const mongoose = require('mongoose');

// Load the environment variables from the `.env` file.
// -------------------------------
require("dotenv").config();

// Get the database URI from the environment variables.
// -------------------------------
const uri = process.env.DBMONGODB_URI;

// Connect to the database.
// -------------------------------
mongoose.connect(uri).then(() => {
  // Log a message to the console to indicate that the connection was successful.
  // -------------------------------
  console.log("connected to db");
});
