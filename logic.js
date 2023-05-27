function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    return computerOptions[Math.floor(Math.random() * 3)];
}


const playerSelection = prompt("What is your choice?");
const computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {
    switch (playerSelection + computerSelection) {

    case "RockScissors":
        return "You Win! Rock beats Scissors";
        break;

    case "RockPaper":
        return "You Lose! Paper beats Rock";
        break;

    case "RockRock":
        return "Draw! Rock cannot beat Rock";
        break;

    case "PaperRock":
        return "You Win! Paper beats Rock";
        break;
        
    case "PaperScissors":
        return "You Lose! Scissors beats Paper";
        break;

    case "PaperPaper":
        return "Draw! Paper cannot beat Paper";
        break;

    case "ScissorsRock":
        return "You Lose! Rock beats Scissors";
        break;
            
    case "ScissorsScissors":
        return "Draw! Scissors cannot beat Scissors";
        break;
    
    case "ScissorsPaper":
        return "You Win! Scissors beats Paper";
        break;

    default:
        return "No winner";
}
}


alert(playRound(playerSelection, computerSelection));