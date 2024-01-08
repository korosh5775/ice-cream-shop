// Import the `express` module.
// -------------------------------
const express = require('express');

// Import the `orderHandler` function from the `order` controller.
// -------------------------------
const orderHandler = require('../../../controller/order');

// Create a new router instance.
// -------------------------------
const router = express.Router();

// Add a `POST` route to the `/order` path.
// -------------------------------
router.post('/order', orderHandler);

// Export the router instance.
// -------------------------------
module.exports = router;
