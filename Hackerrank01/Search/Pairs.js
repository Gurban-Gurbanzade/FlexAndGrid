//
//     Run Code - OK
//
//     Submit Code - Not OK
//
//

function pairs(k, arr) {
  // Write your code here
  let say = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] == k) {
        say++;
      }
    }
  }
  return say;
}
