//Mətn daxilindən uzunluğu 40-50 xarakter arasında olan təsadüfi mətni return edən funksiya yazın
//       done

sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen. Since then, you gradually realize that you have put too much effort into one thing: modifying the application. Even when implementing a simple task, it also requires understanding the whole system. You can’t blame them for changes or new features since they are inevitable parts of software development. So, what is the main problem here? The obvious answer could be derived from the application’s design. Keeping the system design as clean and scalable as possible is one of the critical things that any professional developer should dedicate their time to. And that’s where SOLID design principles come into play. It helps developers eliminate design smells and build the best designs for a set of features. Although the SOLID design principles were first introduced by the famous Computer Scientist Robert C. Martin (a.k.a. Uncle Bob) in his paper in 2000, its acronym was introduced later by Michael Feathers. Uncle Bob is also the author of best-selling books Clean Code, Clean Architecture, Agile Software Development: Principles, Patterns, and Practices.`;

let uzunluq = 50 - Math.floor(Math.random() * 10);
let baslangic = Math.floor(Math.random() * (sampleNews.length - uzunluq));
//console.log("metnin uzunlugu--  " + sampleNews.length);
//console.log("tesadufu metnin baslayacagi sira--  " + baslangic);
//console.log("tesadufu metnin uzunlugu--  " + uzunluq);

let tesadufuMetn = sampleNews.slice(baslangic, baslangic + uzunluq);
let tesadufuMetnSonHali;
let i;
function tesaduf(object) {
  // console.log("tesadufu metn---" + tesadufuMetn);
  // console.log(tesadufuMetn[0]);
  // console.log(tesadufuMetn[tesadufuMetn.length - 1]);

  if (tesadufuMetn[0] !== " " && tesadufuMetn[tesadufuMetn.length - 1] == " ") {
    for (i = 1; i < tesadufuMetn.length; i++) {
      if (tesadufuMetn[i] == " ") {
        tesadufuMetnSonHali = tesadufuMetn.slice(i, tesadufuMetn.length - 1);
        console.log("Təsadüfi mətn: " + tesadufuMetnSonHali);
        break;
      }
    }
  } // birinci sert burada bitir
  else if (
    tesadufuMetn[0] == " " &&
    tesadufuMetn[tesadufuMetn.length - 1] !== " "
  ) {
    for (i = tesadufuMetn.length - 1; i > 0; i--) {
      if (tesadufuMetn[i] == " ") {
        tesadufuMetnSonHali = tesadufuMetn.slice(0, i);
        console.log("Təsadüfi mətn: " + tesadufuMetnSonHali);
        break;
      }
    }
  } // ikinci sert burada bitir
  else if (
    tesadufuMetn[0] !== " " &&
    tesadufuMetn[tesadufuMetn.length - 1] !== " "
  ) {
    for (i = 1; i < tesadufuMetn.length; i++) {
      if (tesadufuMetn[i] == " ") {
        tesadufuMetnSonHali = tesadufuMetn.slice(i, tesadufuMetn.length - 1);
        //console.log("iki terefli---" + tesadufuMetnSonHali);
        break;
      }
    }
    for (i = tesadufuMetnSonHali.length - 1; i > 0; i--) {
      if (tesadufuMetnSonHali[i] == " ") {
        tesadufuMetnSonHali = tesadufuMetnSonHali.slice(0, i);
        //console.log("iki terefli axiri---" + tesadufuMetnSonHali);
        break;
      }
    }
    console.log("Təsadüfi mətn: " + tesadufuMetnSonHali);
  } // 3cu sert burada qurtarir
  else {
    console.log("Təsadüfi mətn: " + tesadufuMetn);
  }
}

tesaduf(sampleNews);
