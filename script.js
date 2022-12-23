function getComputerChoice(){
    num = Math.floor((Math.random() * 3) + 1) 
    if(num === 1){
        return "Rock";
    }
    else if(num === 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return [true, "You win " + playerSelection + " beats " + computerSelection];
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return [true, "You win " + playerSelection + " beats " + computerSelection];
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return [true, "You win " + playerSelection + " beats " + computerSelection];
    }
    else if(playerSelection === computerSelection){
        return ["tie", playerSelection + ", " + computerSelection + " tie"];
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return [false, "You lose " + computerSelection + " beats " + playerSelection];
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return [false, "You lose " + computerSelection + " beats " + playerSelection];
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return [false, "You lose " + computerSelection + " beats " + playerSelection];
    } 
}


function startGame(){
    document.body.removeChild(startButton);
    document.body.removeChild(finalResult);

    let playerScore = 0;
    const playerScoreText = document.createElement("div");
    playerScoreText.textContent += "Your score: " + playerScore;
    document.body.appendChild(playerScoreText);

    let computerScore = 0;
    const computerScoreText = document.createElement("div");
    computerScoreText.textContent += "Computer score: " + computerScore;
    document.body.appendChild(computerScoreText);


    const roundResult = document.createElement("div");
    roundResult.textContent = "...............";
    document.body.appendChild(roundResult);

    const buttonNames = ["Rock", "Paper", "Scissors"];
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
    buttonNames.forEach(name => {
        button = document.createElement("button");
        button.classList.add(name);
        button.textContent = name;
        button.classList.add(name);
        container.appendChild(button);

    })

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", function(e){
        roundResult.textContent = "";
        roundResultArray = playRound(button.className, getComputerChoice());
        roundResult.textContent += roundResultArray[1];
        if(roundResultArray[0] === true){
            playerScore ++;
            playerScoreText.textContent = "";
            playerScoreText.textContent += "Your score: " + playerScore;
        }
        else if(roundResultArray[0] === "tie"){
        
        }
        else{
            computerScore ++;
            computerScoreText.textContent = "";
            computerScoreText.textContent += "Computer score: " + computerScore;
        }
        if(playerScore >= 5 || computerScore >=5){
            roundResult.textContent = "";
            playerScoreText.textContent = "";
            computerScoreText.textContent = "";
            if(playerScore >= 5){
                finalResult.textContent = "You win!";
            }
            else{
                finalResult.textContent = "Computer wins!";
            }
            computerScore = 0;
            playerScore = 0;
            document.body.removeChild(container);
            document.body.appendChild(finalResult);
            document.body.appendChild(startButton);
        }
    }));
}



const finalResult = document.createElement("div");
document.body.appendChild(finalResult);
const startButton = document.createElement("button");
document.body.appendChild(startButton);
startButton.classList.add("startButton");
startButton.textContent = "Play";

startButton.addEventListener("click", function(e){
    startGame()
})