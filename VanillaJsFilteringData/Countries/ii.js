//Hərfə görə ölkə sayının olduğu object return edən funksiya yazın
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
function countryLetterCount(object) {
  let obj = {};
  let country = Object.keys(object);
  for (let i = 0; i < country.length; i++)
    if (obj[`"${country[i][0]}"`]) {
      obj[`"${country[i][0]}"`]++;
    } else {
      obj[`"${country[i][0]}"`] = 1;
    }
  return console.log(obj);
}
countryLetterCount(countries);
