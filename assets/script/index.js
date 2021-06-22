"use strict";
var buttonF = document.querySelector(".web-dev-btn"); //first button
var buttonS = document.querySelector(".mob-dev-btn"); //second button
var buttonT = document.querySelector(".software-consulting-btn"); //third button

var content = document.querySelector(".modelpr");

buttonF.onclick = function () {
  content.innerHTML =
    "Ever since the Internet has been introduced, web services skyrocketed. With a growing demand for e-commerce facilities, Caspian Soft offers a wide range of reliable solutions for organizations. Our main competencies in web development lie in designing modern corporate websites; building e-commerce platforms with high usability and sleek aesthetic, and tailoring online tools for the very niche requirements of the clients.";
};

buttonS.onclick = function () {
  content.innerHTML =
    "In the last decade, smartphones became an absolute necessity for human life. It is the main reason why we build the most innovative apps which help organizations to stay in fashion. Our highly talented and creative team has a capability to develop state-of-the-art mobile applications in various complexity for IOS and Android platforms. We implement advanced features with a delicate user interface and establish a secure data environment.";
  //   this.style.backgroundColor = " #566cb3";
};

buttonT.onclick = function () {
  content.innerHTML =
    "Today, business world, to a large extent, run with operative software programs. In Caspian Soft, we are specialized in implementing a wide range of software solutions to help our clients to maximize their productivity, efficiency, and profitability. These sophisticated programs do not just provide convenience but also assure the professionalism and competitiveness in a modern business environment.";
  // changeColor();
};

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 100,
  backDelay: 700,
  loop: true,
});

// function changeColor() {
//   buttonF.style.backgroundColor = "$blue-color";
// }
