var score = 0;

var scoreTracker = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];

var character = document.getElementById("character");

var obstacle1 = document.getElementById("obstacle1");
var obstacle2 = document.getElementById("obstacle2");

var powerup1 = document.getElementById("powerup1");
var powerup2 = document.getElementById("powerup2");
var powerup3 = document.getElementById("powerup3");
var powerup4 = document.getElementById("powerup4");
var powerup5 = document.getElementById("powerup5");
var powerup6 = document.getElementById("powerup6");
var powerup7 = document.getElementById("powerup7");
var powerup8 = document.getElementById("powerup8");
var powerup9 = document.getElementById("powerup9");
var powerup10 = document.getElementById("powerup10");
var powerup11 = document.getElementById("powerup11");

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

function tracker(id) {
  if (scoreTracker[id]) {
    score++;
    scoreTracker[id] = false;
  }
}

function resetTracker(breakpoint) {
  if (breakpoint == 1) {
    for (i = 0; i < 8; i++) {
      scoreTracker[i] = true;
    }
  } else if (breakpoint == 2) {
    for (i = 8; i < 12; i++) {
      scoreTracker[i] = true;
    }
  }
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
  var characterWidth = parseInt(
    window.getComputedStyle(character).getPropertyValue("width")
  );
  var characterHeight = parseInt(
    window.getComputedStyle(character).getPropertyValue("height")
  );
  var obstacleWidth = parseInt(
    window.getComputedStyle(obstacle1).getPropertyValue("width")
  );
  var powerup1Left = parseInt(
    window.getComputedStyle(powerup1).getPropertyValue("left")
  );
  var powerup2Left = parseInt(
    window.getComputedStyle(powerup2).getPropertyValue("left")
  );
  var powerup3Left = parseInt(
    window.getComputedStyle(powerup3).getPropertyValue("left")
  );
  var powerup4Left = parseInt(
    window.getComputedStyle(powerup4).getPropertyValue("left")
  );
  var powerup5Left = parseInt(
    window.getComputedStyle(powerup5).getPropertyValue("left")
  );
  var powerup6Left = parseInt(
    window.getComputedStyle(powerup6).getPropertyValue("left")
  );
  var powerup7Left = parseInt(
    window.getComputedStyle(powerup7).getPropertyValue("left")
  );
  var powerup8Left = parseInt(
    window.getComputedStyle(powerup8).getPropertyValue("left")
  );
  var powerup9Left = parseInt(
    window.getComputedStyle(powerup9).getPropertyValue("left")
  );
  var powerup10Left = parseInt(
    window.getComputedStyle(powerup10).getPropertyValue("left")
  );
  var powerup11Left = parseInt(
    window.getComputedStyle(powerup11).getPropertyValue("left")
  );
  var deviceWidth = parseInt(
    window.getComputedStyle(game).getPropertyValue("width")
  );
  var breakpointStart = characterLeft + characterWidth * 0.75;
  var breakpointEnd = characterLeft - obstacleWidth * 0.65;
  var breakpointGround = characterGrounded - characterHeight * 0.3;
  if (
    ((obstacle1Left < breakpointStart && obstacle1Left > breakpointEnd) ||
      (obstacle2Left < breakpointStart && obstacle2Left > breakpointEnd)) &&
    characterTop >= breakpointGround
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
  if (obstacle1Left == 0) {
    resetTracker(1);
  }
  if (obstacle2Left == 0) {
    resetTracker(2);
  }
  if (powerup1Left < deviceWidth && powerup1Left > characterLeft) {
    powerup1.style.visibility = "visible";
  }
  if (powerup2Left < deviceWidth && powerup2Left > characterLeft) {
    powerup2.style.visibility = "visible";
  }
  if (powerup3Left < deviceWidth && powerup3Left > characterLeft) {
    powerup3.style.visibility = "visible";
  }
  if (powerup4Left < deviceWidth && powerup4Left > characterLeft) {
    powerup4.style.visibility = "visible";
  }
  if (powerup5Left < deviceWidth && powerup5Left > characterLeft) {
    powerup5.style.visibility = "visible";
  }
  if (powerup6Left < deviceWidth && powerup6Left > characterLeft) {
    powerup6.style.visibility = "visible";
  }
  if (powerup7Left < deviceWidth && powerup7Left > characterLeft) {
    powerup7.style.visibility = "visible";
  }
  if (powerup8Left < deviceWidth && powerup8Left > characterLeft) {
    powerup8.style.visibility = "visible";
  }
  if (powerup9Left < deviceWidth && powerup9Left > characterLeft) {
    powerup9.style.visibility = "visible";
  }
  if (powerup10Left < deviceWidth && powerup10Left > characterLeft) {
    powerup10.style.visibility = "visible";
  }
  if (powerup11Left < deviceWidth && powerup11Left > characterLeft) {
    powerup11.style.visibility = "visible";
  }
  if (
    powerup1Left < breakpointStart &&
    powerup1Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup1.style.visibility = "hidden";
    tracker(0);
  }
  if (
    powerup2Left < breakpointStart &&
    powerup2Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup2.style.visibility = "hidden";
    tracker(1);
  }
  if (
    powerup3Left < breakpointStart &&
    powerup3Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup3.style.visibility = "hidden";
    tracker(2);
  }
  if (
    powerup4Left < breakpointStart &&
    powerup4Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup4.style.visibility = "hidden";
    tracker(3);
  }
  if (
    powerup5Left < breakpointStart &&
    powerup5Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup5.style.visibility = "hidden";
    tracker(4);
  }
  if (
    powerup6Left < breakpointStart &&
    powerup6Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup6.style.visibility = "hidden";
    tracker(5);
  }
  if (
    powerup7Left < breakpointStart &&
    powerup7Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup7.style.visibility = "hidden";
    tracker(6);
  }
  if (
    powerup8Left < breakpointStart &&
    powerup8Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup8.style.visibility = "hidden";
    tracker(7);
  }
  if (
    powerup9Left < breakpointStart &&
    powerup9Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup9.style.visibility = "hidden";
    tracker(8);
  }
  if (
    powerup10Left < breakpointStart &&
    powerup10Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup10.style.visibility = "hidden";
    tracker(9);
  }
  if (
    powerup11Left < breakpointStart &&
    powerup11Left > characterLeft &&
    characterTop == characterGrounded
  ) {
    powerup11.style.visibility = "hidden";
    tracker(10);
  }
  document.getElementById("data").innerHTML = "Score : " + score;
}, 0);
