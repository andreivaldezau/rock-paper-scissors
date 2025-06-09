const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

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
