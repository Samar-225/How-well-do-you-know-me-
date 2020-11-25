var readlineSync = require("readline-sync");

var score = 0;
var tscore=0;
var userName = readlineSync.question("What's your name?\n");

console.log("Welcome "+ userName + " to 'DO YOU KNOW' Samar?\nLet Start..\n\n");


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  { 
    console.log("right!");
    score = score + 1;
    tscore = tscore + 1;
    
  } else {
    console.log("wrong!");
   tscore = tscore + 1;
  }

  console.log("current score: ", score," / ",tscore);
  console.log("-----------------------------------------")
}

// array of objects
var questions = [{
  question: "1.Where do I live?\n1.Satara\n2.Kolhapur\n3.Pune\n",
  answer: "3"
}, {
  question: "2.My favorite Movie would be? \n1.Race2\n2.English Vinglish\n3.Sky Is Pink\n",
  answer: "2"
},
{
  question: "3.In which college do I study? \n1.IIT-Bombay\n2.PICT\n3.JSPM\n",
  answer: "2"
}
,
{
  question: "4.What name of my Favourite book? \n1.The Monk Who sold his Ferrari\n2.Angles and Demons\n3.Musafir\n",
  answer: "3"
},
{
  question: "5.Which is my hometown? \n1.Satara\n2.Kolhapur\n3.Pune\n",
  answer: "1"
},
{
  question: "6.Who is my Favourite teacher? \n1.N Pp Sapkal\n2.Preeti Jain\n3.tanay pratap\n",
  answer: "3"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

if(score>3){
console.log("Nice ! You have SCORED: ", score," / ",tscore);

console.log("Congratulations!")
}

else
{
  console.log("Nice ! You have SCORED: ", score," / ",tscore,"\n\n");



}