document.getElementById('rock').onclick = game;
document.getElementById('paper').onclick = game;
document.getElementById('scissors').onclick = game;

let allButtons = document.querySelectorAll('.buttons');

function disableButtons() {
    allButtons.forEach(btn => {
        btn.disabled = true;
    })
}

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
        result = ("User: " + playerSelection + " Computer: " + computerSelection + "<br><br>Player Wins score is " + playerScore);
        if (playerScore == 5) {
            result += ("<br><br>You Won! Refresh to play again");
            disableButtons();
        }
    } else if (playerSelection == computerSelection) {
        result = ("User: " + playerSelection + " Computer: " + computerSelection + "<br><br>It's a tie, choose again")
    } else {
        computerScore++;
        result = ("User: " + playerSelection + " Computer: " + computerSelection + "<br><br>Computer Wins score is " + computerScore);
        if (computerScore == 5) {
            result += ("<br><br>Computer Wins! Refresh to play again");
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result
    return
}
    

    function rpsRound(playerSelection, computerChoice) {

        if (playerSelection == 'rock' && computerChoice == 'scissors') {
            return true;
        } else if (playerSelection == 'paper' && computerChoice == 'rock') {
            return true;
        } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
            return true;
        } else if (playerSelection == 'rock' && computerChoice == 'paper') {
            return false;
        } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
            return false;
        } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
            return false;
        } else (playerSelection == 'rock' || 'paper' || 'scissors' && computerChoice == 'rock' || 'paper' || 'scissors')
    }

    const container = document.querySelector("#container");
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    container.classList.add('div');
    div.append(h1);
    div.append(p);

    h1.textContent = "Game: Rock, Paper, Scissors"
    p.textContent = "First to reach 5 points, Wins the Game"

    container.appendChild(div);