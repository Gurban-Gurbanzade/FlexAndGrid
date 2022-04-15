//
//     Run Code - OK
//
//     Submit Code - OK
//




function rotLeft(a, d) {
    // Write your code here
let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (d < a.length) {
      arr[i] = a[d];
      d++;
    } else {
      d = 0;
      arr[i] = a[d];
      d++;
    }
  }
  return arr;
}
