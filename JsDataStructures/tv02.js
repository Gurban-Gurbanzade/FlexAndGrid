"use strict";
//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

let names = ["Eli", "Ehmed", "Sara", "Sevda", "Qurban"];
let surnames = ["Piriyev", "Memmedov", "Qurbanova", "Ezizova", "Sadiqzade"];
let ages = [23, 34, 40, 58, 60];
let students = {
  adlar: names,
  soyadlar: surnames,
  yaslar: ages,
};

for (let i = 0; i < students.adlar.length; i++) {
  if (students.adlar[i] == "Eli" || students.adlar[i] == "Ehmed") {
    console.log(
      `Ad: ${students.adlar[i]}, Soyad: ${students.soyadlar[i]}, Yas: ${students.yaslar[i]}`
    );
  }
}

//     Aşağıdakı kodda isə kimin adını daxil etsəniz onun parametrləri çıxır
//     Daha funksional şəkildə nümunə olaraq göstərmişəm

// let names = ["Eli", "Ehmed", "Sara", "Sevda", "Qurban"];
// let surnames = ["Piriyev", "Memmedov", "Qurbanova", "Ezizova", "Sadiqzade"];
// let ages = [23, 34, 40, 58, 60];
// let students = {
//   adlar: names,
//   soyadlar: surnames,
//   yaslar: ages,
// };

// let ad = prompt();

// for (let i = 0; i < students.adlar.length; i++) {
//   if (students.adlar[i] == ad) {
//     console.log(
//       `Ad: ${students.adlar[i]}, Soyad: ${students.soyadlar[i]}, Yas: ${students.yaslar[i]}`
//     );
//   } else {
//     alert("Ad tapılmadı");
//     break;
//   }
// }
