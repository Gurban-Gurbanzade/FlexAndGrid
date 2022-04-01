"use strict";
(function () {
  let i = 0;
  function say() {
    if (i <= 100) {
      console.log(i);
      say(i++);
    }
  }
  say(i++);
})();
