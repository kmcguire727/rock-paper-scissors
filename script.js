// Initial test to verify all is linked
//console.log("Hello, World!");

// ----- Core variables -----
let welcomeMessage = `Welcome to the Rock Paper Scissors Game!`;
const GAME_THROWS = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let playAgain = null;

/**
 * 
 * @param {array} selections - the possible throws available
 * @param {*} max - used as the ceiling for the random integer calculation
 * @returns - string name of the choice
 */
function selectThrow(selections = GAME_THROWS, max = 3) {
    let i = Math.floor(Math.random() * max);
    return selections[i];
}

do {
    // Console output to welcome user
    console.log(welcomeMessage);
    computerThrow = selectThrow();

    // Remove post-debugging
    console.log(`This is the computer's choice for reference: ${computerThrow}`);

    // Prompt the user to select a throw
    let userThrowIndex = prompt("Select your throw (1 for Rock, 2 for Paper, 3 for Scissors)");
    let userThrow = GAME_THROWS[userThrowIndex - 1];

    // Compare the throws against the game's ruleset
    let gameState = null;

    switch (userThrow) {
        case "Rock":
            if (computerThrow === "Rock") {
                gameState = "Draw";
            }
            else if (computerThrow === "Paper") {
                gameState = "Lose";
                computerScore++;
            }
            else if (computerThrow === "Scissors") {
                gameState = "Win";
                userScore++;
            }
            break;
        case "Paper":
            if (computerThrow === "Rock") {
                gameState = "Win";
                userScore++;
            }
            else if (computerThrow === "Paper") {
                gameState = "Draw";
            }
            else if (computerThrow === "Scissors") {
                gameState = "Lose";
                computerScore++;
            }
            break;
        case "Scissors":
            if (computerThrow === "Rock") {
                gameState = "Lose";
                computerScore++;
            }
            else if (computerThrow === "Paper") {
                gameState = "Win";
                userScore++;
            }
            else if (computerThrow === "Scissors") {
                gameState = "Draw";
            }
            break;
    }

    // Declare victory, defeat, or draw
    alert(`${gameState}\nCurrent score:\nComputer: ${computerScore}\nUser: ${userScore}`);

    // Ask the user if they want to play again
    playAgain = prompt("Would you like to play again? (Yes or No)")
} while (playAgain === "Yes");
