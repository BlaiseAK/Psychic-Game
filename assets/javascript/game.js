//pick a random letter

var letArr = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



//show player current progress
var wins = 0;
var losses =0;
var guessesLeft = 9;
var guessArr = [];



function newLetter() {
    guessesLeft = 9;
    guessArr = [];
}

document.onkeyup = function(event) {
    
   var compChoice = letArr[Math.floor(Math.random()*letArr.length)];
   
   var userGuess = event.key.toLowerCase();

    // console.log(userGuess);

    // console.log(compChoice);

    

        
        
        if (userGuess === compChoice) {
            newLetter();
            wins++;
            
        } 
        if (userGuess !== compChoice) {
            guessesLeft = guessesLeft - 1;
            guessArr.push(userGuess);

        }
        if (guessesLeft === 0) {
            newLetter();
            losses ++;
        }

    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your previous guesses: " + guessArr + "</p>";

    document.querySelector("#game").innerHTML = html;
}
































//get the guess from player


//tell the player to pick a letter
//take input from player
//if the letter is guessed update the game progress


