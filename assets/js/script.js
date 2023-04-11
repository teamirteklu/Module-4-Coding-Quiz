var quizStarter = document.querySelector("#quizstart");
var answerSelector = document.querySelector("div.container");

var answerButton = document.querySelectorAll(".quizbutton");
// var answer2Button = document.querySelector("#answer2");
// var answer3Button = document.querySelector("#answer3");
// var answer4Button = document.querySelector("#answer4");

var quizBubble = document.querySelectorAll("div");
var quizAnswer = document.querySelectorAll("input");
var timeEl = document.querySelector(".time");
var questionArray = ["question1", "question2", "question3", "question4"];
var answerArray = ["answer1", "answer2", "answer3", "answer4"];
var secondsLeft = 66;
var score = 0;

// ----------Starting Button-----------------------------------

quizStarter.addEventListener("click", function () {

  setTime();

  var quizQuestion = document.getElementById("quizBegin");
  var question = document.createElement("div");
  question.setAttribute("id", "quizBegin");
  var questiontxt = document.createTextNode(questionArray[0]);
  question.appendChild(questiontxt);
  quizQuestion.replaceChild(question, quizQuestion.childNodes[0]);


 
  QuesAnswer(answerArray);
  buttonClick();
});

function buttonClick() {
  for (let index = 0; index < answerButton.length; index++) {
    console.log(index);
    console.log(answerButton)
  }
}
// answerButton[1].addEventListener("click", checkAnswer);

    function checkAnswer() {
      if (answerButton.value === "correct") {
        score++
        console.log(score);
      }
    }
// function nextQues(array) {
//   var i = 1++;
//   var quizQuestion = document.getElementById("quizBegin");
//   var question = document.createElement("div");
//   question.setAttribute("id", "quizBegin");
//   var questiontxt = document.createTextNode(array[i]);
//   question.appendChild(questiontxt);
//   quizQuestion.replaceChild(question, quizQuestion.childNodes[0]);
// }

// -------------------Set Time---------------------------------


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }

  // ------------------Leaderboard------------------------------

  function endQuiz() {
    var quizHeader = document.getElementById("quizBegin");
    var question = document.createElement("div");
    question.setAttribute("id", "quizBegin");
    var headertxt = document.createTextNode("Leaderboard");
    question.appendChild(headertxt);
    quizHeader.replaceChild(question, quizHeader.childNodes[0]);

    var quizAnswer = document.getElementsByClassName("quizbutton");
    var initialInput = document.createElement("INPUT");
    initialInput.setAttribute("type", "text");
    document.body.appendChild(initialInput);
    // quizAnswer.replaceChild(initialInput, quizAnswer.childNodes[0]);
    console.log(quizAnswer);
    
  }

  // ------------------------Score------------------------------


function highScore(){

}

// -------------------------Answer Change-----------------------

function QuesAnswer (array) {
    var quizAnswer = document.getElementById("innertext");
    var answer = document.createElement("button");
    answer.setAttribute("id", "answer");
    answer.setAttribute("class", "quizbutton");
    var txt = document.createTextNode(array[0]);
    answer.appendChild(txt);
    quizAnswer.replaceWith(answer);
    console.log(answer);

    var quizContainer = document.getElementById("container");
    var answer2 = document.createElement("button");
    answer2.setAttribute("id", "answer");
    answer2.setAttribute("value", "correct");
    answer2.setAttribute("class", "quizbutton");
    var txt2 = document.createTextNode(array[1]);
    answer2.appendChild(txt2);
    console.log(answer2);
    quizContainer.appendChild(answer2);

    var quizContainer = document.getElementById("container");
    var answer3 = document.createElement("button");
    answer3.setAttribute("id", "answer");
    answer3.setAttribute("class", "quizbutton");
    var txt3 = document.createTextNode(array[2]);
    answer3.appendChild(txt3);
    console.log(answer3);
    quizContainer.appendChild(answer3);

    var quizContainer = document.getElementById("container");
    var answer4 = document.createElement("button");
    answer4.setAttribute("id", "answer");
    answer4.setAttribute("class", "quizbutton");
    var txt4 = document.createTextNode(array[3]);
    answer4.appendChild(txt4);
    console.log(answer4);
    quizContainer.appendChild(answer4);

}

function mapQuestions(question) {

return question[0];

}