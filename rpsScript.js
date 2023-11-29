// This function getComputerChoice is the opponent (computer) that will choose at random 'rock', 'paper' or 'scissors'.

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

// This function will play the game 'Rock, Paper, Scissors' in one round. The user (player) and the opponent (computer) will play against each other. When the game/round ends a message will declare win, lose or tie.

function rpsSingleRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
    return "You win! Rock beats Scissors";
} else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
    return "You win! Paper beats Rock";
} else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
    return "You win! Scissors beat Paper";
} else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
    return "You lose! Paper beats Rock";
} else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
    return "You Lose! Scissors beats Paper";
} else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
    return "You Lose! Rock beats Scissors";
} else (playerSelection.toLowerCase() === 'rock' || 'paper' || 'scissors' && computerSelection.toLowerCase() === 'rock' || 'paper' || 'scissors') 
    return "It's a tie!";
}


const playerSelection = ('');
const computerSelection = getComputerChoice();
console.log(rpsSingleRound(playerSelection, computerSelection));

// The function game() will determine which player will win best-out-of-five, where each player's scores are recorded and at the end declare a message of a winner and loser.

