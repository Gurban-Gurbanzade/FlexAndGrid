//Ən çox şəhəri olan ölkə adını return edən funksiya yazın
//     done
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
function countryCityMax(object) {
  let countryArrCity = Object.values(object);
  let countryArrAll = Object.entries(object);
  let cityCount = 0;
  let countryName;
  for (let i = 0; i < countryArrCity.length; i++) {
    if (countryArrCity[i].length > cityCount) {
      cityCount = countryArrCity[i].length;
      countryName = countryArrAll[i][0];
    }
  }
  return console.log(countryName);
}
countryCityMax(countries);
