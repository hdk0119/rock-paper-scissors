const userInput = prompt("Human VS PC!\n1: Rock  2: Paper  3: Scissors\nEnter your choice of attack!");
//const attack = ["Rock", "Paper", "Scissors"];
//const random = attack[Math.random() * attack.length | 0];

function getComputerChoice() 
{
    let num = Math.floor(Math.random() * 3);
    let choice;
    switch (num) {
        case 0:
            choice = "rock";
            break;
    
        case 1:
            choice = "paper";
            break;

        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

let computerChoice = getComputerChoice();
let playerChoice = userInput;

function playRound(playerChoice, computerChoice) {
    playerChoice = userInput.toLowerCase();

    if (playerChoice === computerChoice) return "Draw";
    
    if (playerChoice === "rock"){
        if (computerChoice === "scissors"){
            return true;
        } else return false;
    }

    if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            return true;
        } else return false;
    }
    
    if (playerChoice === "scissors"){
        if (computerChoice === "paper"){
            return true;
        } else return false;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        alert(userInput);

        let result = playRound(playerChoice, computerChoice);
        let message = result? alert(`You win! ${playerChoice} beats ${computerChoice}`) :
        alert(`You lose! ${computerChoice} beats ${playerChoice}\nBetter luck next time`);

        if (result === "Draw") {
            i--;
            alert("It's a Draw! Try again.");
            continue;
        }

        if (result) {
            playerScore++;
        } else computerScore++;

        alert(message);
        
        if (playerScore === 3 || computerScore === 3) break;
    }

    (playerScore > computerScore)? alert("You are the WINNER!") : alert("You have lost...\nReload the page to Play Again!");
}

