//
//     Run Code - OK
//
//     Submit Code - Not OK
//
//

function jumpingOnClouds(c) {
  let say = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i] == 0) {
      if (c[i + 1] == 0 || c[i + 1] == 1) {
        say++;
        if (c[i + 1] == 0 && c[i + 2] == 0 && c[i - 1] !== 0) {
          say--;
        }
      }
    }
  }
  return say;
}

//c=[0 ,0 ,1, 0, 0, 1, 0] bu bir bulud oyunudur
// 0 olanlar təhlükəsiz, 1 olanlar ildırımlı buludlardır
// oyunçu başdan sona ən qısa neçə addıma çata bilər tapın
// 1 ilə rastlaşdıqda növbəti buluda keçid edilir
// 2 ardıcıl buludun üzərindən 1 dəfəyə adlamaq olar. Məsən
// 0,0,0,1,0 burada sonuncu buluda 3 və 2 addıma gəlmək olar. cavab 2-dir. Çünki 1 ci buluddan 3 cü buluda bir başa keçid etmək olar
// 0,1,0,1,0 burada sonuncu buluda 2 addıma gəlmək olar çünki ardıcıl təhlükəsiz bulud yoxdur
//c=[0 ,0 ,1, 0, 0, 1, 0] bu Arreydə başdan sona neçə addıma gəlmək olar tapın//
