var quizStarter = document.querySelector("#quizstart");

var quizBubble = document.querySelectorAll("div");
var quizAnswer = document.querySelectorAll("input");


quizStarter.addEventListener("click", function () {

var questionArray = ["question1", "question2", "question3", "question4"]

    // for (var i; i<4; i++) {
    var quizQuestion = document.getElementById("quizBegin");
    var question = document.createElement("div");
    question.setAttribute("id", "quizBegin");
    var txt = document.createTextNode(questionArray);
    question.appendChild(txt);
    quizQuestion.replaceChild(question, quizQuestion.childNodes[0]);
    console.log(questionArray);
// }


    var quizAnswer = document.getElementById("innertext");
    var answer = document.createElement("button");
    answer.setAttribute("id", "answer");
    answer.setAttribute("class", "quizbutton");
    var txt2 = document.createTextNode("fajdfkajdhfk");
    answer.appendChild(txt2);
    quizAnswer.replaceWith(answer);
    console.log(answer);
    
    
});

function mapQuestions(question) {
    console.log(question);
    question.split("");
    return question;

}