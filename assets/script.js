var secondsRemain = document.querySelector("#time");
var secondsLeft = 75;
var start = document.querySelector("#start");
var home = document.querySelector("#home");
var questionSection = document.getElementById("questionSection");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var questionList = ["Is CSS dumb?", "test"];
var answerList1 = ["yes", "no"];
var answerList2 = ["no", "yes"];



function startGame() {
  home.style.display = "none";
  questionSection.removeAttribute("class");

  function setTime() {
    var timer = setInterval(function () {
      // secondsLeft--;
      secondsRemain.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timer);
        secondsLeft = 75;
      }
    }, 1000);
  }
  setTime();

  document.getElementById("questionSection").style.display = "inline-block";
  for (i = 0; i < questionList.length; i++) {
    question.textContent = questionList[i];
    document.querySelector(".button").addEventListener("click", function() {
      i++;
      question.textContent = questionList[i];
    })
    for (i = 0; i < answerList1.length; i++) {
      answer1.textContent = answerList1[i];
    }
    for (i = 0; i < answerList2.length; i++) {
      answer2.textContent = answerList2[i];
    }      
  }
}
start.addEventListener("click", startGame);
