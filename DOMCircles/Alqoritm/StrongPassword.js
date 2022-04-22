"use strict";
let a = "goxg";
let x = a.length;

function minimumNumber(n, password) {
  let say = 0;
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  let reqem = 0;
  let upCase = 0;
  let lowCase = 0;
  let char = 0;

  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (password[i] == numbers[j]) {
        reqem++;

        break;
      }
    }
  }
  if (reqem == 0) {
    say++;
  }
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < upper_case.length; j++) {
      if (password[i] == upper_case[j]) {
        upCase++;

        break;
      }
    }
  }
  if (upCase == 0) {
    say++;
  }
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < lower_case.length; j++) {
      if (password[i] == lower_case[j]) {
        lowCase++;

        break;
      }
    }
  }
  if (lowCase == 0) {
    say++;
  }
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < special_characters.length; j++) {
      if (password[i] == special_characters[j]) {
        char++;

        break;
      }
    }
  }
  if (char == 0) {
    say++;
  }

  if (n + say < 6) {
    say++;
    say += 6 - (say + password.length);
  }

  if (say == 6) {
    console.log("1");
    return 1;
  }

  console.log(say);
  return say;
}
minimumNumber(x, a);
