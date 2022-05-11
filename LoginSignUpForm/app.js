// login sehifesinde titrtme kodlari
function logInYoxlama() {
  const input = document.querySelector("div.page-card-infologin").children;
  const inputs = [];
  inputs.push(input[1]);
  inputs.push(input[3]);
  for (let elem of inputs) {
    if (elem.value == "" || input[1].value.indexOf("@") == -1) {
      if (elem.className == "titretme2") {
        elem.className = "titretme1";
        elem.style.border = "1px solid red";
        if (input[1].value.indexOf("@") == -1) {
          document.querySelector(".fa-check").style.opacity = "0";
        }
        break;
      } else {
        elem.className = "titretme2";
        elem.style.border = "1px solid red";
        break;
      }
    } else {
      elem.style.border = "1px solid blue";
      document.querySelector(".fa-check").style.transform = "translateY(-2rem)";
      document.querySelector(".fa-check").style.opacity = "1";
      //document.querySelector(".fa-check").classList.add("fa-solid");
    }
  }
}

// sehifelerin kecid kodlari forgot
function sehifeKecid() {
  const page = document.querySelectorAll(".page-card");
  for (let elem of page) {
    elem.classList.remove(
      "animate__bounceOutUp",
      "animate__animated",
      "animate__bounceInDown",
      "animate__delay-1s"
    );
    // console.log(elem);
    if (elem.className !== "page-card forgotPage") {
      elem.classList.add("animate__animated", "animate__bounceOutUp");
      elem.style.position = "absolute";
    } else {
      elem.classList.add(
        "animate__animated",
        "animate__bounceInDown",
        "animate__delay-1s"
      );
      elem.style.display = "flex";
    }
  }
  // console.log(page);
}

// sehifelerin kecid kodlari sign UP
function sehifeKecidSignUp() {
  const page = document.querySelectorAll(".page-card");
  for (let elem of page) {
    elem.classList.remove(
      "animate__bounceOutUp",
      "animate__animated",
      "animate__bounceInDown",
      "animate__delay-1s"
    );
    if (elem.className !== "page-card signUpPage") {
      elem.style.position = "absolute";
      elem.classList.add("animate__animated", "animate__bounceOutUp");
    } else {
      elem.classList.add(
        "animate__animated",
        "animate__bounceInDown",
        "animate__delay-1s"
      );
      elem.style.display = "flex";
    }
  }
  //console.log(page);
}

// sehifelerin kecid kodlari log in
function sehifeKecidlogin() {
  const page = document.querySelectorAll(".page-card");

  for (let elem of page) {
    elem.classList.remove(
      "animate__bounceOutUp",
      "animate__animated",
      "animate__bounceInDown",
      "animate__delay-1s"
    );
    if (
      elem.className == "page-card forgotPage" ||
      elem.className == "page-card signUpPage"
    ) {
      elem.style.position = "absolute";
      elem.classList.add("animate__animated", "animate__bounceOutUp");
    } else {
      elem.classList.add(
        "animate__animated",
        "animate__bounceInDown",
        "animate__delay-1s"
      );
      elem.style.display = "flex";
    }
  }
}
// qus qoymaq kodlari
function qusQoy() {
  const qus = document.querySelectorAll(".animated-check");
  console.log(qus[1]);
  if (qus[1].classList == "animated-check checkControl") {
    console.log("salam");
    qus[0].classList.remove("checkControl");
    qus[1].classList.remove("checkControl");
    qus[0].parentElement.style.border = "0.3rem #34b93d solid";
    qus[0].parentElement.nextElementSibling.style.color = "#2E7D32";
  } else {
    qus[0].classList.add("checkControl");
    qus[1].classList.add("checkControl");
    qus[0].parentElement.style.border = "0.3rem gray solid";
    qus[0].parentElement.nextElementSibling.style.color = "gray";
  }
}

// kodu goster kodlari
function kodGoster() {
  const elem = document.querySelector(".page-card-infologin").children;
  if (elem[4].classList.value == "fa-solid fa-eye-slash") {
    elem[4].classList.add("fa-eye");
    elem[4].classList.remove("fa-eye-slash");
    elem[3].type = "";
  } else {
    elem[4].classList.remove("fa-eye");
    elem[4].classList.add("fa-eye-slash");
    elem[3].type = "password";
  }
}
