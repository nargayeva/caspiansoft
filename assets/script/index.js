"use strict";
var buttonF = document.querySelector(".model-1"); //first button
var buttonS = document.querySelector(".model-2"); //second button
var buttonT = document.querySelector(".model-3"); //third button

var content = document.querySelector(".modelpr");

buttonF.onclick = function () {
  content.innerHTML =
    "Nunc ac purus non est porttitor maximus sollicitudin in mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sit amet scelerisque urna. Fusce eget erat mauris. Cras viverra tempus ipsum. Duis rutrum arcu ut tempor gravida. Ut vel arcu ac velit commodo tempor sed nec lacus. Aenean pulvinar lectus tempus quam accumsan vehicula.";
};

buttonS.onclick = function () {
  content.innerHTML = "Yoxlayaq gorek";
};

buttonT.onclick = function () {
  content.innerHTML =
    "Nunc ac purus non est porttitor maximus sollicitudin in mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sit amet scelerisque urna. Fusce eget erat mauris. Cras viverra tempus ipsum. Duis rutrum arcu ut tempor gravida. Ut vel arcu ac velit commodo tempor sed nec lacus. Aenean pulvinar lectus tempus quam accumsan vehicula.";
};

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 100,
  backDelay: 700,
  loop: true,
});
