// Import the `express` module.
// -------------------------------
const express = require('express');

// Create a new router instance.
// -------------------------------
const router = express.Router();

// Import the `customer_V_1_0` module.
// -------------------------------
const customer_V_1_0 = require('./api/v1.0/customer');

// Add the `customer_V_1_0` middleware to the `/v-1-0/customer` path.
// -------------------------------
router.use('/v-1-0/customer', customer_V_1_0);

// Export the router instance.
// -------------------------------
module.exports = router;
