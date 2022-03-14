//a b və c ədədləri verilir. a və b ədədlərindən hansının
//c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.

let a = 8; // a ədədinə dəyər daxil edin
let b = 5; // b ədədinə dəyər daxil edin
let c = 0; // c ədədinə dəyər daxil edin

let ferqCA = Math.abs(c - a);
let ferqCB = Math.abs(c - b);
let ferqAB = ferqCA - ferqCB;

if (ferqAB == 0) {
  console.log("a və b ədədləri c ədədindən eyni məsafədədir");
} else if (ferqCA == ferqCB) {
  console.log("a və b ədədləri c ədədindən eyni məsafədədir");
} else if (ferqCA < ferqCB) {
  console.log("a ədədi c ədədinə b-dən daha yaxındır");
} else if (ferqCA > ferqCB) {
  console.log("b ədədi c ədədinə a-dan daha yaxındır");
}
