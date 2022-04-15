//
//     Run Code - OK
//
//     Submit Code - OK
//
//
function alternatingCharacters(s) {
  // Write your code here
  let say = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      say++;
    }
  }
  return say;
}
