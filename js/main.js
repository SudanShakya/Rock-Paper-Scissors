const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; 
}

function getPlayerChoice() {
    let playerInput = prompt("Enter your choice(Rock, Paper or Scissors): ");
    let playerInputLC = playerInput.toLowerCase();
    return playerInputLC;
}

function playRound(computerChoice, playerChoice) {
    if(computerChoice ===  playerChoice){
        return("It's a draw.");
    } else if (
        (computerChoice === "rock" && computerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
        ) {
            return(`You win! ${(playerChoice).toUpperCase()} beats ${(computerChoice).toUpperCase()}.`);
    } else if (
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper") ||
        (computerChoice === "rock" && playerChoice === "scissors")
        ) {
            return(`You lose! ${(computerChoice).toUpperCase()} beats ${(playerChoice).toUpperCase()}.`);
    } 
}

function fullGame() {
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++) {
        const result = playRound(getComputerChoice(),  getPlayerChoice());
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
            console.log(`Computer: ${computerScore}   Player: ${playerScore}`);
        } else if (result.includes("lose")) {
            computerScore++;
            console.log(`Computer: ${computerScore}   Player: ${computerScore
            }`);
        }
    }
        console.log("Final Results: Player: " + playerScore + "  Computer: " + computerScore);

        if (playerScore > computerScore) {
            console.log("You win the game.");
        } else if (playerScore < computerScore) {
            console.log("You lose the game.");
        } else {
            console.log("It's a tie game.");
        }
}

fullGame();