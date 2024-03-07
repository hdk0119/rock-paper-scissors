let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const attack = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);

    return attack[choice];
}

function getPlayerChoice() {
    let userInput = prompt("Human VS PC!\n1: Rock  2: Paper  3: Scissors\nEnter your choice of attack!").toLowerCase();

    return userInput;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        return alert(`Invalid input ${playerChoice}`);
    }

    (playerChoice === computerChoice)? alert(`It's a Draw! Both chose ${playerChoice}`) : roundWin();
    
    function roundWin() {
        let a = playerChoice;
        let b = computerChoice;

        if ((a === "rock" && b === "scissors") || (a === "PAPER" && b === "ROCK") || (a === "SCISSORS" && b === "ROCK")) {
            alert(`You win ! ${a} beats ${b}`);
            playerScore++;
        } else {
            alert(`You Lose ! ${b} beats ${a}`);
            computerScore++;
        }
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        alert(`ROUND ${i}`);
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
        if (playerScore === 3 || computerScore === 3) break;
    }

    (playerScore > computerScore)? alert("You are the WINNER!") : alert("You have lost...\nReload the page to Play Again!");
}

playGame();