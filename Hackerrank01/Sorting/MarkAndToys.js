//
//     Run Code - OK
//
//     Submit Code - OK
//
//
function maximumToys(prices, k) {
  let sum = 0;
  let say = 0;
  prices = prices.sort((a, b) => a - b);
  console.log(prices);
  for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
    if (sum > k) {
      break;
    } else {
      say++;
    }
  }
  return say;
}
