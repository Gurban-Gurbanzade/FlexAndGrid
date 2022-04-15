//
//     Run Code - OK
//
//     Submit Code - Not OK
//
//
function superDigit(n, k) {
  // Write your code here
  let b = n.toString();
  let x = "";
  for (let j = 0; j < k; j++) {
    x += b;
  }
  let c;
  let sum = 0;
  tap(x);
  function tap(y) {
    let z;
    if (y.length !== 1) {
      sum = 0;
      for (let i = 0; i < y.length; i++) {
        c = Number(y[i]);
        sum += c;
      }

      z = sum.toString();

      return tap(z);
    } else {
      return console.log(sum);
    }
  }
  return console.log(sum);
}

superDigit(148, 3);
