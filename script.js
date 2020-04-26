// Event Listeners
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetGame = document.querySelector('.resetButton');
const placard = document.querySelector('.resultsPlacard');
const results = document.querySelector('.resultsDisplay');
const computer = document.querySelector('.computerDisplay');

const playerButtons = Array.from(document.querySelectorAll('.button'));
playerButtons.forEach((button) =>
  button.addEventListener('click', () => alert(button.id))
);

// Functions
function computerPlay() {
  const random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    default:
      return 'scissors';
  }
}

function reset() {}

function game() {
  console.log('Game starting... Round 1');
  let wins = 0;
  let result;
  result = playRound(prompt('rock, paper or scissors?'), computerPlay());
  if (result.search('Win') > 1) {
    ++wins;
  }
  console.log(`Round 1: ${result}. ${wins} wins`);

  result = playRound(prompt('rock, paper or scissors?'), computerPlay());
  if (result.search('Win') > 1) {
    ++wins;
  }
  console.log(`Round 1: ${result}. ${wins} wins`);

  result = playRound(prompt('rock, paper or scissors?'), computerPlay());
  if (result.search('Win') > 1) {
    ++wins;
  }
  console.log(`Round 1: ${result}. ${wins} wins`);

  result = playRound(prompt('rock, paper or scissors?'), computerPlay());
  if (result.search('Win') > 1) {
    ++wins;
  }
  console.log(`Round 1: ${result}. ${wins} wins`);

  result = playRound(prompt('rock, paper or scissors?'), computerPlay());
  if (result.search('Win') > 1) {
    ++wins;
  }
  console.log(`Round 1: ${result}. ${wins} wins`);
  wins > 3
    ? console.log(`You won with ${wins} wins`)
    : console.log(`You lost with ${wins} wins`);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'A draw!';
  }
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats rock';
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! Rock beats scissors';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats rock';
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose! Scissors beat rock';
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lose! Rock beats scissors';
  }
  return 'You Win! Scissors beat paper';
}
