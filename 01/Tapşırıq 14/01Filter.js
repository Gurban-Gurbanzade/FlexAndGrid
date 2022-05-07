const ages = [16, 32, 33, 16, 5, 40];

// let agesAdult = ages.filter(checkAdult);
// console.log(agesAdult);
// function checkAdult(age) {
//   return age >= 18;
// }

// function CustomFilter(func) {
//   for (let i = 0; i < arr.length; i++) {
//     return func(arr[i]);
//   }
// }
// function checkAdult(age) {
//   return age >= 18;
// }

// let agesAdult = ages.CustomFilter(checkAdult);
// console.log(agesAdult);

let arr = {
  sum: function () {
    return this.reduce(function (a, b) {
      a + b;
    });
  },
};
console.log(arr.sum(ages));
