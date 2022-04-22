"use strict";
let d = "middle-Outz";
let n = 2;
let b = "cdefghijklmnopqrstuvwxyzab";
//b.replace(`${b[1]}`, `${d[1]}`);
console.log(d);
function caesarCipher(s, k) {
  let z = "";
  let a = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let A = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let characters = ".!_@#$%^&*()-+*<>{}`/-.[]|?|'";
  let numbers = "0123456789";
  if (k <= 26) {
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (s[i] == a[j]) {
          //console.log(j);
          z += a[j + k];
          break;
        }
        if (s[i] == A[j]) {
          z += A[j + k];
          break;
        }
        if (s[i] == characters[j]) {
          z += characters[j];
          break;
        }
        if (s[i] == numbers[j]) {
          z += numbers[j];
          break;
        }
      }
    }
    console.log(z);
    return z;
  } else {
    k = k % 26;
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (s[i] == a[j]) {
          //console.log(j);
          z += a[j + k];
          break;
        }
        if (s[i] == A[j]) {
          z += A[j + k];
          break;
        }
        if (s[i] == characters[j]) {
          z += characters[j];
          break;
        }
        if (s[i] == numbers[j]) {
          z += numbers[j];
          break;
        }
      }
    }
    console.log(z);
    return z;
  }
}

caesarCipher(d, n);
