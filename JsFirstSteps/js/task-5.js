//verilən kəsirli ədədin (nümumə: 4.234) tam hissəsi ilə
//kəsirli hissəsini ayrı ayrı ekrana çap edən program yazın
let x = prompt();
x = Number(x);
let a;
a = x.toFixed();
console.log(a);
let z = x - a;
z = z.toString();
console.log(z.slice(2));

// console.log("4.234 ədədinin tam hissəsi- " + x.toFixed());
// let y = x - x.toFixed();
// //y = y.toFixed();
// console.log(y);
// y.toString();
// console.log(y);
// console.log(typeof y);
// let z = y.length - 2;
// console.log(z);
// //console.log("4.234 ədədinin kəsrli hissəsi- " + y);
