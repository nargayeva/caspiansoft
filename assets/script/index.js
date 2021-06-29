"use strict";
var buttonF = document.querySelector(".web-dev-btn"); //first button
var buttonS = document.querySelector(".mob-dev-btn"); //second button
var buttonT = document.querySelector(".software-consulting-btn"); //third button

var content = document.querySelector(".modelparagh");

// buttonF.onclick = function () {
//   element.classList.add("chosen");
//   content.innerHTML =
//     "Ever since the Internet has been introduced, web services skyrocketed. With a growing demand for e-commerce facilities, Caspian Soft offers a wide range of reliable solutions for organizations. Our main competencies in web development lie in designing modern corporate websites; building e-commerce platforms with high usability and sleek aesthetic, and tailoring online tools for the very niche requirements of the clients.";
// };

// buttonS.onclick = function () {
//   element.classList.add("chosen");
//   content.innerHTML =
//     "In the last decade, smartphones became an absolute necessity for human life. It is the main reason why we build the most innovative apps which help organizations to stay in fashion. Our highly talented and creative team has a capability to develop state-of-the-art mobile applications in various complexity for IOS and Android platforms. We implement advanced features with a delicate user interface and establish a secure data environment.";
// };

// buttonT.onclick = function () {
//   element.classList.add("chosen");
//   content.innerHTML =
//     "Today, business world, to a large extent, run with operative software programs. In Caspian Soft, we are specialized in implementing a wide range of software solutions to help our clients to maximize their productivity, efficiency, and profitability. These sophisticated programs do not just provide convenience but also assure the professionalism and competitiveness in a modern business environment.";
// };

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 100,
  backDelay: 700,
  loop: true,
});

// function changeColor() {
//   buttonF.style.backgroundColor = "$blue-color";
// }

//for curtain menu

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$("#myCarousel").carousel({
  interval: 1000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

// console.log(alert("nazrin"));

// var a = 6;
// var b = 8;
// var c = a + b;
// console.log(c);
