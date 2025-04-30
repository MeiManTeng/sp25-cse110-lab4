function discountPrices(prices, discount) {
  var discounted = [];
  var finalPrice = 0;

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  //console.log(i); // Line 12
  //console.log(discountedPrice); // Uncomment later if needed
  //console.log(finalPrice);      // Uncomment later if needed

  return discounted;
}

discountPrices([100, 200, 300], 0.5);
