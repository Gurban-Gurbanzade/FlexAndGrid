// Yalnız 2 case-də çalışır
let a = "asdcbsdcagfsdbgdfanfghbsfdab";
console.log(a);

function alternate(s) {
  let arr = [];
  let arrNew = [];
  let b;
  let c;
  let say;
  //console.log(arr);

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      arr.push(s[i]);
    }
  }
  arr.push(s[s.length - 1]);
  console.log(arr); //tekli array

  b = arr[Math.floor(Math.random() * arr.length)];
  c = arr[Math.floor(Math.random() * arr.length)];
  console.log(b);
  console.log(c);

  if (b == c) {
    return alternate(arr);
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == b || arr[j] == c) {
      arrNew.push(arr[j]);
    }
  }
  console.log(arrNew);

  for (let z = 0; z < arrNew.length - 2; z++) {
    if (arrNew[z] !== arrNew[z + 2]) {
      return alternate(arr);
    } else if (arrNew[z] == arrNew[z + 1]) {
      return alternate(arr);
    }
  }
  if (arrNew.length < 4) {
    console.log("0");
    return 0;
  } else {
    console.log(s.length - arrNew.length + 1);
    return s.length - arrNew.length + 1;
  }
}
alternate(a);
