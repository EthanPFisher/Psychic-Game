
// text fields
var       winsText = document.getElementById("wins-text");
var       lossText = document.getElementById("loss-text");
var  guessLeftText = document.getElementById("guessLeft-text");
var guessesText = document.getElementById("guessSoFar-text");

// variables
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;
var guesses = [];
var compChoice;
var userGuess;

// comp choice generator
var compChoiceGen = function() {
    compChoice = letters[Math.floor(Math.random() * Math.floor(letters.length))];
    console.log("comp choice: " + compChoice);
}

// resets game for next round
var resetGame = function() {
    compChoiceGen();
    guessLeft = 9;
    guesses = [];
    winsText.textContent = winCount;
    lossText.textContent = lossCount;
    guessLeftText.textContent = guessLeft;
    guessesText.textContent = guesses;
}
resetGame();

// function run whenever user presses a key
document.onkeyup = function(event) {
    userGuess = event.key;
    if (letters.indexOf(userGuess) != -1) {
        guesses.push(userGuess);
        guessesText.textContent = guesses;
        if (userGuess === compChoice) {
            winCount++
            resetGame();
        }
    }
}
