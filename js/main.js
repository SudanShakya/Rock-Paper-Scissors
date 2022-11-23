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