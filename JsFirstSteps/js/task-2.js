//x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data
//təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin
//növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır.
//(Nümunə: Daxil etdiyini dəyər rəqəmdir)
let x = prompt();
let y;
console.log(x);

if (x === "true" || x === "false") {
  console.log(`Sizin daxil etdiyiniz dəyərin tipi < boolean >`);
  alert(`Sizin daxil etdiyiniz dəyər < məntiqi ifadədir >`);
} else {
  y = Number(x);
  if (isNaN(y)) {
    console.log(`Sizin daxil etdiyiniz dəyərin tipi < NaN >`);
    alert(`Sizin daxil etdiyiniz dəyər < string ifadəsir >`);
  } else if (typeof y === "number") {
    console.log(`Sizin daxil etdiyiniz dəyərin tipi < number >`);
    alert(`Sizin daxil etdiyiniz dəyər < rəqəmdir >`);
  }
}
