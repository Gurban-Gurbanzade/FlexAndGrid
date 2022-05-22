//Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya
//                      done
"use strict";
let countries = {
  Afghanistan: [
    "Herat",
    "Kabul",
    "Kandahar",
    "Molah",
    "Rana",
    "Shar",
    "Sharif",
    "Wazir Akbar Khan",
  ],
  Albania: [
    "Elbasan",
    "Petran",
    "Pogradec",
    "Shkoder",
    "Tirana",
    "Ura Vajgurore",
  ],
};
function countryNameLengthCity(object) {
  let countryArrCity = Object.values(object);
  let countryArrName = Object.keys(object);
  let countryArrAll = Object.entries(object);
  let maxNameLength = 0;
  let maxName;
  let maxNameLengthCity;
  for (let i = 0; i < countryArrAll.length; i++) {
    if (countryArrAll[i][0].length > maxNameLength) {
      maxNameLength = countryArrAll[i][0].length;
      maxName = countryArrAll[i][0];
      maxNameLengthCity = countryArrAll[i][1];
    }
  }
  //console.log(maxNameLength); olke adinin uzunlugu
  //console.log(maxName); // en uzun olkenin adi
  return console.log(maxNameLengthCity.toString()); // en uzun adi olan olkenin seherleri
}
countryNameLengthCity(countries);
