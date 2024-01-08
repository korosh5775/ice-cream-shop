// Import the `IceCream` model and the `priceCalculator` function.
// -------------------------------
const IceCream = require("../model/iceCreamSchema");
const { priceCalculator } = require("../utils/priceCalculator");

// Define the `order` function.
// ---------------------------------
const order = async (req, res, next) => {
  // In case of an error, the code in the catch block will be executed.
  // -------------------------------
  try {
    // Get the size and toppings from the request body.
    // -------------------------------
    const { size, toppings } = req.body;

    // Calculate the final price.
    // -------------------------------
    const finalPrice = priceCalculator(size, toppings);

    // Create a new document from the `IceCream` model and save it.
    // -------------------------------
    const newOrder = new IceCream({
      size,
      toppings,
      price: finalPrice,
    });
    await newOrder.save();

    // Send a success message with the final price.
    // -------------------------------
    res
      .status(201)
      .send(
        `Your ${size} size ice cream with ${toppings.join(
          " and "
        )} was registered for a total price of ${finalPrice} Tomans.`
      );
  } catch (error) {
    // Handle errors here.
    // -------------------------------
    next(error);
  }
};

// Export the `order` function.
// -------------------------------
module.exports = order;
