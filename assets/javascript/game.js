


var losses = 0;
var userGuess = getElementById("guessObject");
var letter;

function randomletter() {
var letter = "";
var possibleGuesses = "abcdefghijkmlnopqrstuvwxyz";

for (var i = 0; i < 1; i++) 
letter += possibleGuesses.charAt(Math.floor(Math.random() * possibleGuesses.length));

return letter;
}

function userGuess() {
    var x = document.getElementById("guessObject").value;
    document.getElementById("guessObject").innerHTML = x;
}

console.log(randomletter);









