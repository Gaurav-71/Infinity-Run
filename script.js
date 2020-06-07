var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
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
  var obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
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
    ", obstacleLeft : " +
    obstacleLeft +
    ", h : " +
    deviceHeight +
    ", w : " +
    deviceWidth;
  /*if (obstacleLeft < characterLeft && characterTop >= characterGrounded) {
    //obstacle.style.animation= "none";
    //obstacle.style.display ="none";
    alert("You Lost !");
  }*/
}, 10);
