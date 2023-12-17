document.getElementById('rock').onclick = game;
document.getElementById('paper').onclick = game;
document.getElementById('scissors').onclick = game;

let playerScore = 0;
let computerScore = 0;



// This function getComputerChoice is the opponent (computer) that will choose at random 'rock', 'paper' or 'scissors'.

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}


// console.log(rpsSingleRound(playerSelection, computerSelection));

// The function game() will play the best of five. Input playerSelection for choice of 'Rock, Paper or Scissors' and at the end declare a message for a winner and loser.



function game() {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    let result = rpsRound(playerSelection, computerSelection);

        if (result) {
            playerScore++;
            console.log("Player score is " + playerScore);
            if (playerScore == 5) {
                console.log("Winner");
            }
        } else if (playerSelection == computerSelection) {
        } else {
            computerScore++;
            console.log("Computer score is " + computerScore);
            if (computerScore == 5) {
                console.log("Computer Win")
            }
        }
    


    // This function will play the game 'Rock, Paper, Scissors' in one round. The user (player) and the opponent (computer) will play against each other. When the game/round ends a message will declare win, lose or tie.


    function rpsRound(playerSelection, computerChoice) {

        if (playerSelection == 'rock' && computerChoice == 'scissors') {
            console.log("You win! Rock beats Scissors");
            return true;
        } else if (playerSelection == 'paper' && computerChoice == 'rock') {
            console.log("You win! Paper beats Rock");
            return true;
        } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
            console.log("You win! Scissors beat Paper");
            return true;
        } else if (playerSelection == 'rock' && computerChoice == 'paper') {
            console.log("You lose! Paper beats Rock");
            return false;
        } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
            console.log("You Lose! Scissors beats Paper");
            return false;
        } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
            console.log("You Lose! Rock beats Scissors");
            return false;
        } else (playerSelection == 'rock' || 'paper' || 'scissors' && computerChoice == 'rock' || 'paper' || 'scissors')
    }   console.log("tie");
}
game();