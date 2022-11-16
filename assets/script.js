var secondsRemain = document.querySelector("#time");
var secondsLeft = 75;
var start = document.querySelector("#start");
var home = document.querySelector("#home");

function startGame() {
  home.style.display = "none";
  document.getElementById("questions").removeAttribute("class");

  function setTime() {
    var timer = setInterval(function () {
      secondsLeft--;
      secondsRemain.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timer);
        secondsLeft = 75;
      }
    }, 1000);
  }
  setTime();
}
start.addEventListener("click", startGame);
