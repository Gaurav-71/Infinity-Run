var character = document.getElementById("character");
var obstacle1 = document.getElementById("obstacle1");
var obstacle2 = document.getElementById("obstacle2");
const characterGrounded = parseInt(
  window.getComputedStyle(character).getPropertyValue("top")
);

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 1000);
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  var obstacle1Left = parseInt(
    window.getComputedStyle(obstacle1).getPropertyValue("left")
  );
  var obstacle2Left = parseInt(
    window.getComputedStyle(obstacle2).getPropertyValue("left")
  );
  var deviceHeight = parseInt(
    window.getComputedStyle(game).getPropertyValue("height")
  );
  var deviceWidth = parseInt(
    window.getComputedStyle(game).getPropertyValue("width")
  );
  var characterWidth = parseInt(
    window.getComputedStyle(character).getPropertyValue("width")
  );
  document.getElementById("data").innerHTML =
    "characterTop : " +
    characterTop +
    ", characterLeft : " +
    characterLeft +
    ", characterGrounded : " +
    characterGrounded +
    ", characterWidth : " +
    characterWidth +
    ", obstacle1Left : " +
    obstacle1Left +
    ", obstacle2Left : " +
    obstacle2Left +
    ", h : " +
    deviceHeight +
    ", w : " +
    deviceWidth;
  if (
    (obstacle1Left < characterLeft && obstacle1Left > 10 || obstacle2Left == characterLeft && obstacle2Left > 10) &&
    characterTop >= characterGrounded
  ) {
    obstacle1.style.animation= "none";
    obstacle1.style.display ="none";
    obstacle2.style.animation= "none";
    obstacle2.style.display ="none";
    alert("You Lost !");
  }
}, -1);
