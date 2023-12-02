// This function getComputerChoice is the opponent (computer) that will choose at random 'rock', 'paper' or 'scissors'.

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

// console.log(rpsSingleRound(playerSelection, computerSelection));

// The function game() will play the best of five. Input playerSelection for choice of 'Rock, Paper or Scissors' and at the end declare a message for a winner and loser.

game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tie;
    let computerSelection;

    for (i = 0; i < 5; i++) {
        do {
            let playerSelection = prompt("Rock, Paper, Scissors");
            computerSelection = getComputerChoice();
            let result = rpsRound(playerSelection, computerSelection);
            if (playerSelection !== computerSelection) {
                if (result) {
                    playerScore++;
                    console.log("Player score is " + playerScore);
                } else {
                    computerScore++;
                    console.log("Computer score is " + computerScore);
                }
                tie = false;
            } else {
                tie = true;
            }
        } while (tie == true);
    }
    console.log(playerScore > computerScore ? "Winner" : "Loser");
}

// This function will play the game 'Rock, Paper, Scissors' in one round. The user (player) and the opponent (computer) will play against each other. When the game/round ends a message will declare win, lose or tie.


function rpsRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        console.log("You win! Rock beats Scissors");
        return true;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        console.log("You win! Paper beats Rock");
        return true;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        console.log("You win! Scissors beat Paper");
        return true;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        console.log("You lose! Paper beats Rock");
        return false;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        console.log("You Lose! Scissors beats Paper");
        return false;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
        console.log("You Lose! Rock beats Scissors");
        return false;
    } else (playerSelection.toLowerCase() == 'rock' || 'paper' || 'scissors' && computerSelection.toLowerCase() == 'rock' || 'paper' || 'scissors')
    console.log("Tie, choose again");
}





