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
  }, 800);
}

window.onkeydown = function (event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    jump();
  }
};

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
  var characterWidth = parseInt(
    window.getComputedStyle(character).getPropertyValue("width")
  );
  var breakpoint = characterLeft + characterWidth;
  if (
    ((obstacle1Left < breakpoint && obstacle1Left > characterLeft) ||
      (obstacle2Left < breakpoint && obstacle2Left > characterLeft)) &&
    characterTop >= characterGrounded
  ) {
    obstacle1.style.animation = "none";
    obstacle1.style.display = "none";
    obstacle2.style.animation = "none";
    obstacle2.style.display = "none";
    console.log("you lost");
    alert("lost");
    clearInterval(checkDead);
    location.reload();
  }
}, 0);
