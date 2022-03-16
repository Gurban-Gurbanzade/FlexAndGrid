//verilən kəsirli ədədin (nümumə: 4.234) tam hissəsi ilə
//kəsirli hissəsini ayrı ayrı ekrana çap edən program yazın
let x = 4.234;
console.log("4.234 ədədinin tam hissəsi- " + x.toFixed());
let y = x - x.toFixed();
y = y * 1000;
console.log("4.234 ədədinin kəsrli hissəsi- " + y);
