// Global variables required for the game.
var randomNumber = 0;
var totalScore = 0;
var gummyBear1 = 0;
var gummyBear2 = 0;
var gummyBear3 = 0;
var gummyBear4 = 0;
var wins = 0;
var losses = 0;

//Start game function (Can also be used to restart game) sets all variables to what they need to be.
function startGame() {
    // generates the random number
    randomNumber = Math.floor(Math.random() * 102) + 12;
    totalScore = 0;
    // generates the random numbers for the gummy bear buttons
    gummyBear1 = Math.floor(Math.random() * 12) + 1;
    gummyBear2 = Math.floor(Math.random() * 12) + 1;
    gummyBear3 = Math.floor(Math.random() * 12) + 1;
    gummyBear4 = Math.floor(Math.random() * 12) + 1;
    // updates the site to show the randomnumber.
    updateSite();
}

//Handles if user wins or not.
function handle() {
    $("#livestatus").text("");
    // if total score is equal to the random number meaning they won.
    if (totalScore === randomNumber) {
        // call win method
        win();
        // updates the status on website to display that they won
        $("#livestatus").text("YOU WON!");
    // if the total score is GREATER than the random number means they over shoot meaning
    // they lost.
    } else if (totalScore > randomNumber) {
        // call lose function to handle
        lose();
        // update status on website to say they have lost
        $("#livestatus").text("YOU LOST!");
    }
    updateSite();
}

//Win function adds a win to the win counter and restarts the game.
function win() {
    wins++;
    startGame();
}

//Lose funciton adds a loss to the loss couter and restarts the game.
function lose() {
    losses++;
    startGame();
}

// 4 functions all work the same for 4 differnt gummy bears.
// adds gummy bear's value to the total score and calls handle function
// which will handle what to do with the new score.

function handleGummyBear1() {
    totalScore += gummyBear1;
    handle();
}

function handleGummyBear2() {
    totalScore += gummyBear2;
    handle();
}

function handleGummyBear3() {
    totalScore += gummyBear3;
    handle();
}

function handleGummyBear4() {
    totalScore += gummyBear4;
    handle();
}

// Update site method updates all variables on the websites to what they need to be.
function updateSite() {
    $("#randmNumber").text(randomNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#total").text(totalScore);
}