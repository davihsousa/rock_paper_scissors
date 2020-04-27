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
    const resultElement = document.createElement('p');
    resultElement.textContent = roundResult;
    placard.appendChild(resultElement);
    game();
  })
);

resetGame.addEventListener('click', newGame);

// Functions
function resetPlacard() {
  while (placard.firstElementChild) {
    placard.removeChild(placard.lastChild);
  }
}

function display(display, content) {
  display.textContent = content;
}

function newGame() {
  resetPlacard();
  display(results, '--');
  display(computer, '--');
}

function game() {
  let wins = 0;
  let losses = 0;
  const actualResults = Array.from(placard.querySelectorAll('p'));
  actualResults.forEach((result) => {
    if (result.textContent === 'Won') {
      ++wins;
    } else if (result.textContent === 'Lost') {
      ++losses;
    }
  });

  if (wins === 5) {
    display(results, 'WINNER!');
    newGame();
  } else if (losses === 5) {
    display(result, 'You Lost!');
    newGame();
  } else {
    display(results, `${wins}:${losses}`);
  }
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
    return 'Won';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'Won';
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Lost';
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Lost';
  }
  return 'Won';
}
