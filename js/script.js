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

function buildQuiz(){}
function showResults(){}

// quiz starts
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is The condition in an if / else statement is enclosed within _______.a JavaScript package manager?",
    answers: {
      a: "Quotes",
      b: "curly brackets",
      c: "parentheses",
      d: "square brackets"
    },
    correctAnswer: "c"
  },
  {
    question: "Arrays in JavaScript can be used to store_______.?",
    answers: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: {
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "parentheses"
    },
    correctAnswer: "c"
  },
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// quiz functions below
function buildQuiz(){
  // variable to store the HTML output
  var output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      var answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

myQuestions.forEach( (currentQuestion, questionNumber) => {
  // code to run for each question goes here
  const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);
});

quizContainer.innerHTML = output.join('');

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

  // find selected answer
  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  // if answer is correct
  if(userAnswer === currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;

    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }
});

// if answer is correct
if(userAnswer === currentQuestion.correctAnswer){
  // add to the number of correct answers
  numCorrect++;

  // color the answers green
  answerContainers[questionNumber].style.color = 'lightgreen';
}
// if answer is wrong or blank
else{
  // color the answers red
  answerContainers[questionNumber].style.color = 'red';
}

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

// First multiple choice question appears

// When user selects CORRECT answer, next question appears

// If user selects INCORRCT answer, "incorrect message" appears and timer substracts 10 seconds

// Game ends when user answers all questions within the time, or game ends when timer reaches 0

// Game Over message - user has option to save initials and score//