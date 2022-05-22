//Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın
//        done
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
function countryName(object) {
  let arrNames = [];
  for (let key in object) {
    arrNames.push(key);
  }
  return console.log(arrNames);
}
countryName(countries);
