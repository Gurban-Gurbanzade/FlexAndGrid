"use strict";
let a = "SOSOOSOSOSOSOSSOSOSOSOSOSOS";

function marsExploration(s) {
  // Write your code herelet say = 0;
  let say = 0;
  let newStr;
  let c;
  for (let i = 0; i < s.length; i = i + 3) {
    if (s[i] == "S" && s[i + 1] == "O" && s[i + 2] == "S") {
    } else {
      if (s[i] !== "S") {
        say++;
      }
      if (s[i + 1] !== "O") {
        say++;
      }
      if (s[i + 2] !== "S") {
        say++;
      }
    }
  }
  console.log(say);
  return say;
}
marsExploration(a);
