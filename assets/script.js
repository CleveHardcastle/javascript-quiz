var secondsRemain = document.querySelector("#time");
var secondsLeft = 75;
var start = document.querySelector("#start");
var home = document.querySelector("#home");
var questionSection = document.getElementById("questionSection");

function startGame() {
  home.style.display = "none";
  questionSection.removeAttribute("class");

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

  var answerButton = document.createElement("button");
  answerButton.innerHTML = "Click Me";
  document.body.appendChild(answerButton);
}
start.addEventListener("click", startGame);
