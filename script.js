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
  button.addEventListener('click', function () {
    const roundResult = playRound(button.id);
    alert(roundResult);
  })
);

// Functions
function resetPlacard() {
  while (placard.firstElementChild) {
    placard.removeChild(placard.lastChild);
  }
}

function display(display, content) {
  display.textContent = content;
}

function game(rounds) {
  let wins = 0;
  let losses = 0;
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

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  display(
    computer,
    computerSelection.replace(/^\w/, (first) => first.toUpperCase())
  );

  if (playerSelection === computerSelection) {
    return 'Draw';
  }
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Lost';
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'Win';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'Win';
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Lost';
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Lost';
  }
  return 'Win';
}
