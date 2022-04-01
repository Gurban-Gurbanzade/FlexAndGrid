"use strict";
// expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

let names = ["Eli", "Ehmed", "Sara", "Sevda", "Qurban"];
let surnames = ["Piriyev", "Memmedov", "Qurbanova", "Ezizova", "Sadiqzade"];
let ages = [23, 34, 40, 58, 60];
let students = [names, surnames, ages];

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < names.length; j++) {
    if (students[i][j] == "Eli" || students[i][j] == "Ehmed") {
      console.log(
        `Ad: ${students[i][j]}, Soyad: ${students[i + 1][j]}, Yas: ${
          students[i + 2][j]
        }`
      );
    }
  }
}

//     Aşağıdakı kodda isə kimin adını daxil etsəniz onun parametrləri çıxır
//     Daha funksional şəkildə nümunə olaraq göstərmişəm

// let ad = prompt();
// let names = ["Eli", "Ehmed", "Sara", "Sevda", "Qurban"];
// let surnames = ["Piriyev", "Memmedov", "Qurbanova", "Ezizova", "Sadiqzade"];
// let ages = [23, 34, 40, 58, 60];
// let students = [names, surnames, ages];
// let i;
// let j;

// for (i = 0; i < students.length; i++) {
//   for (j = 0; j < names.length; j++) {
//     if (students[i][j] == ad) {
//       console.log(
//         `Ad: ${students[i][j]}, Soyad: ${students[i + 1][j]}, Yas: ${
//           students[i + 2][j]
//         }`
//       );
//     }
// else{
//     alert('Ad tapılmadı')
//break;
//   }
//   }
// }
