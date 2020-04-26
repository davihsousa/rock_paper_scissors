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

function playRound(playerSelection, computerSelection) {
  const playerSelectionLower = playerSelection.toLowerCase();
  const computerSelectionLower = computerSelection.toLowerCase();

  if (playerSelection === computerSelectionLower) {
    return 'A draw!';
  }
  if (playerSelectionLower === 'rock' && computerSelectionLower === 'paper') {
    return 'You Lose! Paper beats rock';
  }
  if (
    playerSelectionLower === 'rock' &&
    computerSelectionLower === 'scissors'
  ) {
    return 'You Win! Rock beats scissors';
  }
  if (playerSelectionLower === 'paper' && computerSelectionLower === 'rock') {
    return 'You Win! Paper beats rock';
  }
  if (
    playerSelectionLower === 'paper' &&
    computerSelectionLower === 'scissors'
  ) {
    return 'You Lose! Scissors beat rock';
  }
  if (
    playerSelectionLower === 'scissors' &&
    computerSelectionLower === 'rock'
  ) {
    return 'You Lose! Rock beats scissors';
  }
  return 'You Win! Scissors beat paper';
}

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
