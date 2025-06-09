const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const WIN_SCORE = 3;

let humanScore = 0;
let computerScore = 0;

let winCondition = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getHumanChoice() {
  input = prompt("Enter rock, paper, or scissors: ");
  return input.toLowerCase();
}

function getComputerChoice() {
  let choice = getRandomInt(3);
  switch (choice) {
    case ROCK:
      return "rock";
    case PAPER:
      return "paper";
    case SCISSORS:
      return "scissors";
    default:
      console.log("Invalid case.");
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Tie! You both played ${capitalize(humanChoice)}.`);
  } else if (winCondition[humanChoice] === computerChoice) {
    console.log(
      `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${capitalize(humanChoice)} does not beat ${capitalize(
        computerChoice
      )}.`
    );
    computerScore++;
  }
}

function capitalize(str) {
  if (str.length === 0) {
    return "";
  } else {
    return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}

function playGame() {
  while (humanScore < WIN_SCORE && computerScore < WIN_SCORE) {
    playRound(getHumanChoice(), getComputerChoice());
    printScore();
  }
  if (humanScore > computerScore) {
    console.log("Human wins!");
  } else {
    console.log("Computer wins!");
  }
  resetScore();
}

function printScore() {
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
}
