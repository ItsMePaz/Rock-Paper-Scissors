//Player's Pick

let playerSelection = prompt("Rock, Paper, or Scissors?");

let lowerCasedPlayerSelection =
  playerSelection.charAt(0).toUpperCase() +
  playerSelection.substring(1).toLowerCase();

console.log("You chose " + lowerCasedPlayerSelection);

let playerVar = lowerCasedPlayerSelection;
if (lowerCasedPlayerSelection == "Rock") {
  playerVar = 0;
} else if (lowerCasedPlayerSelection == "Paper") {
  playerVar = 1;
} else if ((lowerCasedPlayerSelection == "Scissors", "Scissor")) {
  playerVar = 2;
} else {
  console.log("Please provide valid Input");
}

//End of Player's Pick

//Computer's Pick

function getComputerChoice(max) {
  return Math.floor(Math.random() * max);
}

let computerVar = "";

let computerChoice = getComputerChoice(3);
if (computerChoice === 0) {
  computerVar = "Rock";
  console.log("Computer chose " + computerVar);
} else if (computerChoice === 1) {
  computerVar = "Paper";
  console.log("Computer chose " + computerVar);
} else if (computerChoice === 2) {
  computerVar = "Scissors";
  console.log("Computer chose " + computerVar);
} else {
  console.log("Please provide valid Input");
}

//End of Computer's Pick

//Start Selection of Winner

function playRound(playerVar, computerChoice) {
  if (playerVar === computerChoice) {
    return "It is a tie!";
  } else if (playerVar === 0 && computerChoice === 2) {
    return "You win!";
  } else if (playerVar === 1 && computerChoice === 0) {
    return "You win!";
  } else if (playerVar === 2 && computerChoice === 1) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

const playerVar2 = playerVar;
const computerChoice2 = computerChoice;

console.log(playRound(playerVar2, computerChoice2));

//End of Selection of Winner
