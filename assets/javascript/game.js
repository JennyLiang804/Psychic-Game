//pop up
alert("Hey there! \nwanna play a game?");

//arrey 
var alphabetLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//win, losses, guessesleft, yourguessessofar
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = [];
var userGuess = [];
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];


//player select any key from keyboard
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(letterToBeGuessed);

    //display the letters has been use
    if (yourGuessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        yourGuessesSoFar[yourGuessesSoFar.length] = userGuess;
        guessesLeft--;
    }

    if (letterToBeGuessed == userGuess) {
        wins++;
        alert("You Won!");
        guessesLeft = 9;
        yourGuessesSoFar = [];
        letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Your Guesses so far: " + yourGuessesSoFar + "Computer Picked: " + letterToBeGuessed);
    }

    if (guessesLeft == 0) {
        losses++;
        alert("You lost!");
        guessesLeft = 9;
        yourGuessesSoFar = [];
        letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Your Guesses so far: " + yourGuessesSoFar + "Computer Picked: " + letterToBeGuessed);
    }

    var html = "<h1>The Psychic Game</h1>" + "<h3>Press any key to guess what letter I'm thinking of!</h3>" + "<h4>Wins: " + wins + "</h4>" + "<h4>Losses: " + losses + "</h4>" + "<h4>Guesses Left: " + guessesLeft + "</h4>" + "<h4>Your guesses so far: " + yourGuessesSoFar + "</h4>";

    document.querySelector("#game").innerHTML = html;
}