var wins= 0;
var losses= 0;
var numGuess= 9;
var guessArr=[];
  
// computer picks random letter and can't be changed
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess;
// computer picks a number
function reset(){
  guessArr = [];
  numGuess= 9;
  computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
 };

reset();

  
document.onkeyup = function(event){
  var userGuess= event.key;
  
  // put into if statement to check for a-z
  if(guessArr.indexOf(userGuess) === -1) {
    guessArr.push(event.key);
  // If condiitionalfor assigning points
  if(userGuess !== computerGuess && numGuess > 1)  {
       numGuess--;
      } 
      else if (userGuess !== computerGuess && numGuess === 1) 
      {
        losses++;
        reset();
       } 
      else if (userGuess === computerGuess){
        wins++;
        reset();
        }
      } else {
        alert("already guessed");
      }


// console.log for debugging
  renderInfo ()
// show on the screen to user


};

function renderInfo (){
  document.getElementById("winsId").innerHTML = wins;
  document.getElementById("lossesId").innerHTML = losses;
  document.getElementById("guessesLeftId").innerHTML = numGuess;
  document.getElementById("guessesId").innerHTML = guessArr;

}

