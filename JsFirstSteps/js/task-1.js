//a b və c ədədləri verilir. a və b ədədlərindən hansının
//c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.

let a = prompt("a ədədini daxil edin");
let b = prompt("b ədədini daxil edin");
let c = prompt("c ədədini daxil edin");

let ferqCA = Math.abs(c - a);
let ferqCB = Math.abs(c - b);
let ferqAB = ferqCA - ferqCB;

if (ferqAB == 0) {
  console.log("a və b ədədləri c ədədindən eyni məsafədədir");
  alert(`${a} və ${b} ədədləri ${c} ədədindən eyni məsafədədir`);
} else if (ferqCA == ferqCB) {
  console.log("a və b ədədləri c ədədindən eyni məsafədədir");
  alert(`${a} və ${b} ədədləri ${c} ədədindən eyni məsafədədir`);
} else if (ferqCA < ferqCB) {
  console.log("a ədədi c ədədinə b-dən daha yaxındır");
  alert(`${a} ədədi ${c} ədədinə ${b} ədədindən daha yaxındır`);
} else if (ferqCA > ferqCB) {
  console.log("b ədədi c ədədinə a-dan daha yaxındır");
  alert(`${b} ədədi ${c} ədədinə ${a} ədədindən daha yaxındır`);
}
