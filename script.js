let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generate Target Number
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// console.log(generateTarget())



//Target Number Guess
/*
const compareGuesses = (human , computer, targetNumber ) => {
  if(human != computer) {
    humanGuesses = Math.abs((human - targetNumber));
    computerGuesses = Math.abs((computer - targetNumber));
    return humanGuesses <= computerGuesses ? true: false;
    // if (humanGuesses < computerGuesses) {
    //   return true
    // } else {
    //   return false
    // }
  }
}

// console.log(compareGuesses(2,5,5));
function getAbsoluteDistance(human, computer) {
   
}
*/

const compareGuesses = (human, computer, targetNumber) => {
  // targetNumber = generateTarget()
  if(human != computer) {
    // humanGuesses = Math.abs((human - targetNumber));

    humanGuesses = getAbsoluteDistance(human, targetNumber) 
    computerGuesses = getAbsoluteDistance(computer, targetNumber);
 
    return humanGuesses <= computerGuesses ? true: false;

    // if (humanGuesses < computerGuesses) {
    //   return true
    // } else {
    //   return false
    // }
  }
}
// console.log(compareGuesses(2,5));

function getAbsoluteDistance(actualNumber, targetNumber){
     if(actualNumber < 0 || actualNumber > 9) {
       alert('Please ensure a value is in between 0 and 9')
     } else {
       return Math.abs(actualNumber - targetNumber)
     }
    };
    
//Increment the winner's score
const updateScore = winnerScore => {
   if (winnerScore === 'human') {
     humanScore++;  
} else {
    computerScore++; 
 }
};   
         
// console.log(updateScore('human'))
// updateScore('human')


function advanceRound() {
  currentRoundNumber++
}

