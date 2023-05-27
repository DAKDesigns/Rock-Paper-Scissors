function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    return computerOptions[Math.floor(Math.random() * 3)];
}


const playerSelection = prompt("What is your choice?");
const computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {
    switch (playerSelection + computerSelection) {

    case "RockScissors":
    case "rockScissors":
        return "You Win! Rock beats Scissors";
        break;

    case "RockPaper":
    case "rockPaper":
        return "You Lose! Paper beats Rock";
        break;

    case "RockRock":
    case "rockRock":
        return "Draw! Rock cannot beat Rock";
        break;

    case "PaperRock":
    case "paperRock":
        return "You Win! Paper beats Rock";
        break;
        
    case "PaperScissors":
    case "paperScissors":
        return "You Lose! Scissors beats Paper";
        break;

    case "PaperPaper":
    case "paperPaper":
        return "Draw! Paper cannot beat Paper";
        break;

    case "ScissorsRock":
    case "scissorsRock":
        return "You Lose! Rock beats Scissors";
        break;
            
    case "ScissorsScissors":
    case "scissorsScissors":
        return "Draw! Scissors cannot beat Scissors";
        break;
    
    case "ScissorsPaper":
    case "scissorsPaper":
        return "You Win! Scissors beats Paper";
        break;

    default:
        return "No winner";
}
}


alert(playRound(playerSelection, computerSelection));