//
//     Run Code - OK
//
//     Submit Code - Not OK
//
//
function repeatedString(s, n) {
  let say = 0;
  let b;
  if (s.length > n) {
    for (let i = 0; i < n; i++) {
      if (s[i] == "a") {
        say++;
      }
    }
    return say;
  } else {
    b = s + s;
    return repeatedString(b, n);
  }
}
