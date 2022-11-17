var secondsRemain = document.querySelector("#time");
var secondsLeft = 75;
var start = document.querySelector("#start");
var home = document.querySelector("#home");
var questionSection = document.getElementById("questionSection");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var button = document.querySelector(".button");
var questionList = ["Is CSS dumb?", "test"];
var questionId = 0;
var answersList = [['yes', 'no'], ['no', 'yes']]
var answers = answersList[questionId]
answer1.value = answers[0]
answer2.value = answers[1]


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

function setQuestionText() {
  question.textContent = questionList[questionId];
}


function setAnswerText() {
  answer1.textContent = answers[0];
  answer2.textContent = answers[1];
}


function startGame() {
  home.style.display = "none";
  questionSection.style.display = "inline-block";
  setTime();
  setQuestionText();
  setAnswerText();
  setAnswerText();
}

start.addEventListener("click", startGame);

