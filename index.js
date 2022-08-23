var readLineSync = require("readline-sync");

var userName = readLineSync.question("what is your Name");

var score = 0;


var questions = [
  {
    question: "html stands for ?",
    answer: "Hypertext Markup language"
  },
  {
    question: "which is to Top most header element ?",
    answer: "<h1>"
  },
  {
    question: "what are the Types of List ?",
    answer: "<ol>,<ul>,<dl>"
  },
  {
    question: "which is the smallest header ?",
    answer: "<h6>"
  },
  {
    question: "which element tag is used inserting image in a web page",
    answer: "<img>"
  }
]

function welcome() {

  console.log("welcome to HTML quiz " + userName);
}

function quiz(currentQue, currentAns) {

  var userAnswer = readLineSync.question(currentQue);

  if (userAnswer.toLowerCase() === currentAns.toLowerCase()) {

    console.log("your Answer is Right");
    score += 1;
  }
  else {
    console.log("your Answer is Wrong");
  }

  console.log("your score" + score);
  console.log("-----------");
}


function startgame() {

  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }

}


function finalScore() {
  console.log(userName + " you have scored " + score);
}


welcome();
startgame();
finalScore();