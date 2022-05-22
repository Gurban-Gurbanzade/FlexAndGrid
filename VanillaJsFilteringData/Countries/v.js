//Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}
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
function countryCityCount(object) {
  let obj = {};
  let countryArrCity = Object.values(object);
  let countryArrName = Object.keys(object);
  let countryArrAll = Object.entries(object);
  for (let i = 0; i < countryArrCity.length; i++) {
    obj[`"${countryArrName[i]}"`] = countryArrCity[i].length;
  }
  return console.log(obj);
}
countryCityCount(countries);
