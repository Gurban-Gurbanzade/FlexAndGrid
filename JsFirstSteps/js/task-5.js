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

