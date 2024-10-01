let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Draw! Play Again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (winConditions[userChoice] === compChoice) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

    checkGameOver();
};

const checkGameOver = () => {
    if (userScore === 5) {
        msg.innerText = "Congratulations! You win the game!";
        disableChoices();
    } else if (compScore === 5) {
        msg.innerText = "Sorry! The computer wins the game!";
        disableChoices();
    }
};

const disableChoices = () => {
    choices.forEach(choice => choice.style.pointerEvents = 'none'); // Disable pointer events
};

const enableChoices = () => {
    choices.forEach(choice => {
        choice.style.pointerEvents = 'auto'; // Re-enable pointer events
        choice.classList.remove("disabled"); // Optionally remove any "disabled" class if you have styling
    });
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorepara.innerText = userScore;
    compScorepara.innerText = compScore;
    msg.innerText = "Choose Rock, Paper, or Scissors!";
    msg.style.backgroundColor = "#081b31";
    enableChoices();
};

// Main game function
const playgame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    showWinner(userChoice, compChoice);
};

// Event listeners for choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playgame(userChoice);
    });
});

// Play Again button event listener
document.querySelector("#play-again").addEventListener("click", resetGame);

// Initially enable choices
enableChoices();


