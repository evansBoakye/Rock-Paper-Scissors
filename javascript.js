
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber === 1){
        return "rock"
    } else if(randomNumber === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}
function getHumanChoice() {
    let userPrompt = prompt("Rock, Paper or scissors?");
    userPrompt = userPrompt.toLowerCase()
    return userPrompt
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = "";
let computerChoice = "";

function playGame() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice()

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        // Rock
        console.log(`your choice is ${humanChoice}`)
        console.log(`The computers choice is ${computerChoice}`)
        
        if(humanChoice === "rock") {
            if(computerChoice === "scissors") {
                humanScore++
            } else if(computerChoice == "paper") {
                computerScore++
            }
            else {
                console.log("draw")
            }
        } else if (humanChoice === "paper") {
            if(computerChoice === "rock") {
                humanScore++
            } else if(computerChoice == "scissors") {
                computerScore++
            }
            else {
                console.log("draw")
            }
        } else if (humanChoice === "scissors") {
            if(computerChoice === "paper") {
                humanScore++
            } else if(computerChoice == "rock") {
                computerScore++
            }
            else {
                console.log("draw")
            }
        }
        console.log(`your score after playing is: ${humanScore}`)
        console.log(`The computer score after playing is: ${computerScore}`)
        return
    }
    playRound(humanChoice, computerChoice);
}
for (let i = 0; i < 5; i++) {
    playGame();
}
if (humanScore > computerScore) {
    console.log(`You win! ${humanScore} points`)
}
else {
    console.log(`You lose! Computer won with ${computerScore} points`)
}