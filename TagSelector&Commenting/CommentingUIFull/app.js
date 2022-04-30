// commentin yazılma tarixini gün olaraq tarix kimi qeyd etdim. Gunun hesablanmasının cavabı eyni olacaq deyə. Əgər gərəkərsə feedback verin push edim
"use strict";
function select() {
  let x = document.querySelector("input");
  let z = Number(document.querySelector(".commentsCountNumber").innerText);
  const gun = new Date();
  if (x.value == "") {
    alert("Zəhmət olmasa şərh bildirin.");
  } else {
    let a = ` <div class="comment"onclick="removeComment(this)">
  <div class="pic">
    <img class="commentImg" src="Image/girl.jpg" alt="" />
  </div>
  <div class="commentInfo">
    <h1>Michael Sena</h1>
    <p class="commentDate">${
      gun.getDate() + "." + (gun.getMonth() + 1) + "." + gun.getFullYear()
    }</p>
    <p class="commentId">0x2a0D29...269BBb6</p>
    <p class="commentText" style="font-size: large">
      ${x.value}
    </p>
  </div>
</div> `;
    document.querySelector("main").insertAdjacentHTML("afterbegin", a);
    x.value = "";
    z++;
    document.querySelector(".commentsCountNumber").innerText = `${z}`;
  }
}
function removeComment(comment) {
  let element = comment;
  element.remove();
  let z = Number(document.querySelector(".commentsCountNumber").innerText);
  z--;
  document.querySelector(".commentsCountNumber").innerText = `${z}`;
}
