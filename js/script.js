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

startButton.addEventListener("click", startGame);


// First multiple choice question appears

// When user selects CORRECT answer, next question appears

// If user selects INCORRCT answer, "incorrect message" appears and timer substracts 10 seconds

// Game ends when user answers all questions within the time, or game ends when timer reaches 0

// Game Over message - user has option to save initials and score//