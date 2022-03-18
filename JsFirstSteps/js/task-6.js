//3 nöqtənin koordinatları verilir.Bu verilən koordinatlara
//görə a nöqtəsinə ən yaxın nöqtəni tapan proqram yazın
//a_x=120,a_y=200
//b_x=230,b_y=400
//c_x=210,c_y=345

let a_x = prompt("a nöqtəsinin x oxu üzrə kordinanını daxil edin");
let a_y = prompt("a nöqtəsinin 7 oxu üzrə kordinanını daxil edin");
let b_x = prompt("b nöqtəsinin x oxu üzrə kordinanını daxil edin");
let b_y = prompt("b nöqtəsinin y oxu üzrə kordinanını daxil edin");
let c_x = prompt("c nöqtəsinin x oxu üzrə kordinanını daxil edin");
let c_y = prompt("c nöqtəsinin y oxu üzrə kordinanını daxil edin");

let mesafeAC = Math.pow(c_x - a_x, 2) + Math.pow(c_y - a_x, 2);
mesafeAC = Math.sqrt(mesafeAC);
console.log(mesafeAC);

let mesafeAB = Math.pow(b_x - a_x, 2) + Math.pow(b_y - a_x, 2);
mesafeAB = Math.sqrt(mesafeAB);
console.log(mesafeAB);

if (mesafeAC > mesafeAB) {
  console.log("b nöqtəsi a nöqtəsinə c nöqtəsindən daha yaxındır");
  alert("b nöqtəsi a nöqtəsinə c nöqtəsindən daha yaxındır");
} else if (mesafeAC < mesafeAB) {
  console.log("c nöqtəsi a nöqtəsinə b nöqtəsindən daha yaxındır");
  alert("c nöqtəsi a nöqtəsinə b nöqtəsindən daha yaxındır");
} else {
  console.log("c və b nöqtələri  a nöqtəsinə bərabər məsafədədirlər");
  alert("c və b nöqtələri  a nöqtəsinə bərabər məsafədədirlər");
}
