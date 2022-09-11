// When user clicks "Start Button" timer countdown starts from 60 seconds to 0
var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var secondsLeft = 60;
   
function startGame() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = secondsLeft;
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
        }
    
      }, 1000);
    }
// this function also needs to start quiz
startButton.addEventListener("click", startGame); 

//first question and answer
let question = {
    title: 'Commonly used data types DO NOT include:',
    alternatives: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 2
};

function showQuestion(q) {
  let titleDiv = document.getElementById('title');
  titleDiv.textContent = q.title;

  let alts = document.querySelectorAll('.alternative');

  alts.forEach(function(element, index){
    element.textContent = q.alternatives[index];
    element.addEventListener('click', function(){
      if (q.correctAnswer == index) {
        window.alert('Correct Answer!');
      } else {
        window.alert('Wrong Answer!');
      }
    });
  });
}

showQuestion(question);

//   {
//     question: "Which one of these is The condition in an if / else statement is enclosed within _______.a JavaScript package manager?",
//     answers: {
//       a: "Quotes",
//       b: "curly brackets",
//       c: "parentheses",
//       d: "square brackets"
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "Arrays in JavaScript can be used to store_______.?",
//     answers: {
//       a: "numbers and strings",
//       b: "other arrays",
//       c: "booleans",
//       d: "all of the above"
//     },
//     correctAnswer: "d"
//   },
//   {
//     question: "String values must be enclosed within _____ when being assigned to variables.",
//     answers: {
//       a: "commas",
//       b: "curly brackets",
//       c: "quotes",
//       d: "parentheses"
//     },
//     correctAnswer: "c"
//   },
// ];


// First multiple choice question appears

// When user selects CORRECT answer, next question appears

// If user selects INCORRCT answer, "incorrect message" appears and timer substracts 10 seconds

// Game ends when user answers all questions within the time, or game ends when timer reaches 0

// Game Over message - user has option to save initials and score//