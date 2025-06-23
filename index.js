const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const WIN_SCORE = 3;

const winCondition = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");
const score = document.querySelector(".score");

let humanScore = 0;
let computerScore = 0;

btn_rock.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
btn_paper.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
btn_scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

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
    results.textContent = `Tie! You both played ${capitalize(humanChoice)}.`;
  } else if (winCondition[humanChoice] === computerChoice) {
    results.textContent = `You win! ${capitalize(
      humanChoice
    )} beats ${capitalize(computerChoice)}.`;
    humanScore++;
  } else {
    results.textContent = `You lose! ${capitalize(
      humanChoice
    )} does not beat ${capitalize(computerChoice)}.`;
    computerScore++;
  }
  printScore();
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
  score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
}
