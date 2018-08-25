
// text fields
var      winsText = document.getElementById("wins-text");
var      lossText = document.getElementById("loss-text");
var guessLeftText = document.getElementById("guessLeft-text");
var   guessesText = document.getElementById("guessSoFar-text");

// variables
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;
var guesses = [];
var compChoice;
var userGuess;

// updates page text
var updatePage = function() {
    winsText.textContent = "Wins: " + winCount;
    lossText.textContent = "Losses: " + lossCount;
    guessLeftText.textContent = "Guesses left: " + guessLeft;
    guessesText.textContent = "Guesses so far: " + guesses;
}

// resets game for next round
var resetGame = function() {
    compChoice = letters[Math.floor(Math.random() * Math.floor(letters.length))];
    console.log("computer choice: " + compChoice);
    guessLeft = 9;
    guesses = [];
    updatePage();
}
resetGame();

// function run whenever user presses a key
document.onkeyup = function(event) {
    userGuess = event.key;
    if (letters.indexOf(userGuess) != -1 && guesses.indexOf(userGuess) == -1) {
        guesses.push(userGuess);
        if (userGuess === compChoice) {
            winCount++
            resetGame();
        } else {
            guessLeft--;
            updatePage();
            if (guessLeft <= 0) {
                lossCount++;
                resetGame();
            }
        }
    }
}
