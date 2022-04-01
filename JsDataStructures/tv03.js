"use strict";
//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34
let students = [
  {
    ad: "Eli",
    soyad: "Piriyev",
    yas: 23,
  },
  {
    ad: "Ehmed",
    soyad: "Memmedov",
    yas: 34,
  },
  {
    ad: "Sara",
    soyad: "Qurbanova",
    yas: 40,
  },
  {
    ad: "Sevda",
    soyad: "Ezizova",
    yas: 58,
  },
  {
    ad: "Qurban",
    soyad: "Sadiqzade",
    yas: 60,
  },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].ad == "Eli" || students[i].ad == "Ehmed") {
    console.log(
      `Ad: ${students[i].ad}, Soyad: ${students[i].soyad}, Yas: ${students[i].yas}`
    );
  }
}

//     Aşağıdakı kodda isə kimin adını daxil etsəniz onun parametrləri çıxır
//     Daha funksional şəkildə nümunə olaraq göstərmişəm

// let names = prompt();
// for (let i = 0; i < students.length; i++) {
//   if (students[i].ad === names) {
//     console.log(
//       `Ad: ${students[i].ad}, Soyad: ${students[i].soyad}, Yas: ${students[i].yas}`
//     );
//     break;
//   } else {
//     alert("Ad tapılmadı");
//     break;
//   }
// }
