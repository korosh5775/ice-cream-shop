// This function calculates the price of an ice cream order.
//
// Inputs:
//   size: The size of the ice cream. Valid values are "small", "medium", or "large".
//   toppings: An array of toppings. Valid values are strings.
//
// Returns:
//   The price of the ice cream order.

exports.priceCalculator = (size, toppings) => {
  // Validate the inputs.
  // -------------------------------
  if (!["small", "medium", "large"].includes(size)) {
    // Throw an error if the size is invalid.
    // -------------------------------
    const err = new Error("Invalid size.");
    err.statusCode = 400; // bad request
    // -------------------------------
    throw err;
  }

  if (
    !Array.isArray(toppings) ||
    toppings.some((topping) => typeof topping !== "string")
  ) {
    // Throw an error if the toppings are invalid.
    // -------------------------------
    const err = new Error("Toppings must be strings.");
    err.statusCode = 400; // bad request
    // -------------------------------
    throw err;
  }

  // Calculate the price.
  // -------------------------------
  let price;
  switch (size) {
    case "small":
      price = 1000;
      break;
    case "medium":
      price = 1500;
      break;
    case "large":
      price = 2000;
      break;
  }

  // Calculate the price increase for toppings.
  // -------------------------------
  const priceIncrease =
    toppings.length > 0 &&
    (toppings.includes("smarties") && toppings.includes("chocolate")
      ? 20
      : toppings.includes("smarties")
      ? 10
      : toppings.includes("chocolate")
      ? 15
      : 0);

  // Calculate the final price.
  // -------------------------------
  return price + (price > 0 ? (price * priceIncrease) / 100 : 0);
};
