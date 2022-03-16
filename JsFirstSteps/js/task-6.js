//3 nöqtənin koordinatları verilir.Bu verilən koordinatlara
//görə a nöqtəsinə ən yaxın nöqtəni tapan proqram yazın
//a_x=120,a_y=200
//b_x=230,b_y=400
//c_x=210,c_y=345

let a_x = 1;
let a_y = 2;
let b_x = 3;
let b_y = 4;
let c_x = 5;
let c_y = 6;

let mesafeAC = Math.pow(c_x - a_x, 2) + Math.pow(c_y - a_x, 2);
mesafeAC = Math.sqrt(mesafeAC);
console.log(mesafeAC);

let mesafeAB = Math.pow(b_x - a_x, 2) + Math.pow(b_y - a_x, 2);
mesafeAB = Math.sqrt(mesafeAB);
console.log(mesafeAB);
