// ----- Core variables -----
const GAME_THROWS = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let roundWinOrLose = "";
let clickCount = 0; //to track rounds in user-displayed output

/**
 * 
 * @param {array} selections - the possible throws available
 * @param {int} max - used as the ceiling for the random integer calculation
 * @returns - string name of the choice
 */
function selectThrow(selections = GAME_THROWS, max = 3) {
    let i = Math.floor(Math.random() * max);
    return selections[i];
}

/**
 * 
 * @param {string} user - user's throw selection
 * @param {string} computer  - computer's throw selection
 */
function getGameWinner(user, computer) {
    let currentRoundState = "";

    switch (user) {
        case "rock":
            if (computer === "rock") {
                currentRoundState = "draw";
            }
            else if (computer === "paper") {
                currentRoundState = "lose";
            }
            else if (computer === "scissors") {
                currentRoundState = "win";
            }
            break;
        case "paper":
            if (computer === "rock") {
                currentRoundState = "win";
            }
            else if (computer === "paper") {
                currentRoundState = "draw";
            }
            else if (computer === "scissors") {
                currentRoundState = "lose";
            }
            break;
        case "scissors":
            if (computer === "rock") {
                currentRoundState = "lose";
            }
            else if (computer === "paper") {
                currentRoundState = "win";
            }
            else if (computer === "scissors") {
                currentRoundState = "draw";
            }
            break;
    }
    // Return the state of the current round so it can be triggered off of to score
    return currentRoundState;
}

// Bring buttons into javascript
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    clickCount++;
    let userThrow = button.id;
    let computerThrow = selectThrow();

    roundWinOrLose = getGameWinner(userThrow, computerThrow);

    switch (roundWinOrLose) {
        case "win":
            userScore++;
            if (userScore >= 5) {
                alert("The user has won!")
                window.location.reload();
            }
            break;
        case "lose":
            computerScore++;
            if (computerScore >= 5) {
                alert("The computer has won!")
                window.location.reload();
            }
            break;
    }

    const span = document.createElement("span");
    span.textContent = `Round ${clickCount} | Score: User = ${userScore}, Computer = ${computerScore}`;
    results.appendChild(span);

  });
});

// Display the running score as rounds are played
// Announce a winner of the game one there are 5 tries