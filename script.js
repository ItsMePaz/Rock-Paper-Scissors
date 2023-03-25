let playerSelection = prompt("Rock, Paper, or Scissors?");

let lowerCasedPlayerSelection =
  playerSelection.charAt(0).toUpperCase() +
  playerSelection.substring(1).toLowerCase();

console.log("You chose " + lowerCasedPlayerSelection);

/* //Player's Pick
if (playerSelection === "Rock") {
  return 0;r
} else if (playerSelection === "Paper") {
  return 1;
} else if (playerSelection === "Scissors") {
  return 2;
} else {
  console.log("Try Again");
}
 */

//Computer's Pick

function getComputerChoice(max) {
  return Math.floor(Math.random() * max);
}

let newVar = "";

let computerChoice = getComputerChoice(3);
if (computerChoice == "0") {
  newVar = "Rock";
  console.log("Computer chose " + newVar);
} else if (computerChoice == "1") {
  newVar = "Paper";
  console.log("Computer chose " + newVar);
} else if (computerChoice == "2") {
  newVar = "Scissors";
  console.log("Computer chose " + newVar);
} else {
  console.log("Please provide valid Input");
}

/* function playRound(playerSelection, computerSelection) {}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */
