var wins= 0;
var losses= 0;
var numGuess= 9;
var guessArr=[];

// computer picks random letter and can't be changed
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 
var computerFixedGuess = computerGuess

document.onkeyup = function(event){
  var userGuess= event.key;
  
  // put into if statement to check for a-z
  if(userChoices.indexOf(userGuess) !== -1) {
    guessArr.push(event.key);
  }

  if(userGuess !== computerFixedGuess && numGuess > 0) {
    numGuess--;
  } else if( userGuess !== computerFixedGuess && numGuess === 0) {
    losses++;
  } else {
    wins++;
  }

  

console.log(computerFixedGuess);

document.getElementById("winsId").innerHTML = wins;
document.getElementById("lossesId").innerHTML = losses;
document.getElementById("guessesLeftId").innerHTML = numGuess;
document.getElementById("guessesId").innerHTML = guessArr;

};
