"use strict";
function select() {
  let x = document.querySelector("input");
  if (x == "") {
    alert("Zəhmət olmasa şərh bildirin.");
  } else {
    let a = ` <div class="comment">
  <div class="pic">
    <img class="commentImg" src="Image/girl.jpg" alt="" />
  </div>
  <div class="commentInfo">
    <h1>Michael Sena</h1>
    <p class="commentDate">8 months ago</p>
    <p class="commentId">0x2a0D29...269BBb6</p>
    <p class="commentText" style="font-size: large">
      ${x.value}
    </p>
  </div>
</div> `;
    document.querySelector("main").insertAdjacentHTML("afterbegin", a);
    x.value = "";
  }
}
