const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; 
}

function getPlayerChoice() {
    let playerInput = prompt("Enter your choice(Rock, Paper or Scissors): ");
    let playerInputLC = playerInput.toLowerCase();
    return playerInputLC;
}