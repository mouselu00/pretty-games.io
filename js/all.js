// JavaScript Document
if (document.querySelector(".bg-indexlogin") != null) {
  document.querySelector(".bg-indexlogin").style.height =
    window.innerHeight + "px";
}

window.onresize = function () {
  if (document.querySelector(".bg-indexlogin") != null) {
    document.querySelector(".bg-indexlogin").style.height =
      window.innerHeight + "px";
  }
};
/**/

if (document.querySelector(".bg-menu") != null) {
  // document.querySelector(".bg-menu").style.height = window.innerHeight + "px";
}

window.onresize = function () {
  if (document.querySelector(".bg-menu") != null) {
    // document.querySelector(".bg-menu").style.height = window.innerHeight + "px";
  }
};
