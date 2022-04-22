"use strict";
let a = "saveChangesInTheEditor";
function camelcase(s) {
  let say = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      say++;
    }
  }
  console.log(say);
  return say;
}
camelcase(a);
