document.getElementById('rock').onclick = game;
document.getElementById('paper').onclick = game;
document.getElementById('scissors').onclick = game;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

function game(event) {
    let playerSelection = event.target.id;
    let computerSelection = getComputerChoice();
    let compare = rpsRound(playerSelection, computerSelection);
    let result;

        if (compare) {
            playerScore++;
            result = ("User: " + playerSelection + "Computer: " + computerSelection)
            result = ("Player score is " + playerScore);
            if (playerScore == 5) {
            result += (" You Won! Refresh to play again");
            }
        } else if (playerSelection == computerSelection) {
            result = ("It's a tie, choose again")
        } else {
            computerScore++;
            result = ("User: " + playerSelection + "Computer: " + computerSelection)
            result = ("Computer score is " + computerScore);
            if (computerScore == 5) {
            result = (" Computer Wins! Refresh to play again")
            }
        }

        document.getElementById('result').innerHTML = result
        return
    
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
            console.log("It's a tie, please choose again");
        }
    } 