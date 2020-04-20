function computerPlay() {
  const random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    default:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

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
  wins > 3 ? console.log(`You won with ${wins} wins`) : console.log(`You lost with ${wins} wins`);
}
