// Generates the random computer choice //

function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    return computerOptions[Math.floor(Math.random() * 3)];
}


// Defines the logic for a single round //

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
      return "You lose man! Paper beats Rock!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      return "You win! Paper beats Rock!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      return "You win! Rock beats Scissors!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      return "You lose man! Rock beats Scissors!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "You lose man! Scissors beats Paper!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "You win! Scissors beats Paper!";
    } else if (playerSelection == computerSelection) {
      return "Draw";
    }
  }


  // Calls the single round function 5 times //

function game() {
    for (let i = 0; i < 5;  i++) {
      let playerSelection = prompt("Rock, Paper or Scissors?");
      let computerSelection = getComputerChoice();

      console.log(playRound(playerSelection, computerSelection));
    }
  }

game();