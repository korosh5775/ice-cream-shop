// Import the `mongoose` module.
// -------------------------------
const mongoose = require("mongoose");

// Create a new schema for the `IceCream` model.
// -------------------------------
const iceCreamSchema = new mongoose.Schema({
  // The `size` property is a string that is required.
  // -------------------------------
  size: {
    type: String,
    required: true,
  },

  // The `toppings` property is an array of strings that are required.
  // -------------------------------
  toppings: [
    {
      type: String,
      required: true,
    },
  ],

  // The `price` property is a number.
  // -------------------------------
  price: Number,
});

// Export the `IceCream` model.
// -------------------------------
module.exports = mongoose.model("IceCream", iceCreamSchema);

