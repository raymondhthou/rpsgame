// This function getComputerChoice is the opponent (computer) that will choose at random 'rock', 'paper' or 'scissors'.

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

// This function will play the game 'Rock, Paper, Scissors' in one round. The user (player) and the opponent (computer) will play against each other. When the game/round ends a message will declare win, lose or tie.

function rpsSingleRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return "You win! Rock beats Scissors";
} else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return "You win! Paper beats Rock";
} else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return "You win! Scissors beat Paper";
} else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return "You lose! Paper beats Rock";
} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return "You Lose! Scissors beats Paper";
} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return "You Lose! Rock beats Scissors";
} else (playerSelection === 'rock' || 'paper' || 'scissors' && computerSelection === 'rock' || 'paper' || 'scissors') 
    return "It's a tie!";
}


const playerSelection = ('');
const computerSelection = getComputerChoice();
console.log(rpsSingleRound(playerSelection, computerSelection));