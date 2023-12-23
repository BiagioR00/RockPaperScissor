const container = document.querySelector("#container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resetGameButton = document.querySelector("#reset")

let playerSelection;

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    round(playerSelection);
})

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    round(playerSelection);
})

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    round(playerSelection);
})

resetGameButton.addEventListener('click', resetGame)


const moves = ['rock', 'paper', 'scissors'];
let scorePlayer = 0;
let scoreComputer = 0;
let rounds = 0;
let scorePlayerText = document.createElement('p');
let scoreComputerText = document.createElement('p');
let text = document.createElement('p');
text.textContent = "Let's play";
container.appendChild(scorePlayerText);
container.appendChild(scoreComputerText);
container.appendChild(text);


function getComputerChoice() {
    return moves[Math.floor(Math.random() * moves.length)];
}


function round(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        text.textContent = 'It\'s a tie';
        rounds += 1;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        scorePlayer += 1;
        scorePlayerText.textContent = "Player score: " + scorePlayer;
        text.textContent = 'Player won';
        rounds += 1;
    } else {
        scoreComputer += 1;
        scoreComputerText.textContent = "Computer score: " + scoreComputer;
        text.textContent = 'Computer won';
        rounds += 1;
    }

    if (rounds >= 5) {
        checkWinner();
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

function updateGame() {
    scorePlayerText.textContent = "Player score: " + scorePlayer;
    scoreComputerText.textContent = "Computer score: " + scoreComputer;
    text.textContent = "Let's play";
    rock.disabled = rounds >= 5;
    paper.disabled = rounds >= 5;
    scissors.disabled = rounds >= 5;
}

function resetGame() {
    scoreComputer = 0;
    scorePlayer = 0;
    rounds = 0;
    updateGame();
}



function checkWinner() {
    if (scorePlayer > scoreComputer) {
        text.textContent = 'Player is the winner. Let\'s play again.';
        scoreComputer = 0;
        scorePlayer = 0;
    } else if (scorePlayer < scoreComputer) {
        text.textContent = 'Computer is the winner. Let\'s play again.';
        scoreComputer = 0;
        scorePlayer = 0;
    } else {
        text.textContent = 'It\'s a tie guys. Let\'s play again.';
        scoreComputer = 0;
        scorePlayer = 0;
    }

}