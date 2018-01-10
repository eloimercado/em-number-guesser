var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var userGuess = document.getElementById('user-guess');
var lastGuess = document.getElementById('last-guess');
var displayTheLastGuess = document.getElementById('display-the-last-guess');
var clue = document.getElementById('clue');
var lastGuess = document.getElementById('last-guess');
var changeMin = document.getElementById('change-min');
var changeMax = document.getElementById('change-max');
var submitButton = document.getElementById('submit-button');
var min = parseInt(document.getElementById('change-min').value) || 1;
var max = parseInt(document.getElementById('change-max').value) || 100;
var randomNumber = newRandomNumber();
  console.log(randomNumber)

guessButton.addEventListener('click',function(event) {
  event.preventDefault();
  displayTheLastGuess.innerText = userGuess.value;
  var guess = parseInt(userGuess.value);
  if (guess < randomNumber && guess > min) {
     lastGuess.innerText = 'Your last guess was';
     lastGuess.style.fontSize = '30px'
     clue.innerText = 'This guess is too low';
     clue.style.color = 'black';
  } else if(guess > randomNumber && guess < max) {
     lastGuess.innerText = 'Your last guess was';
     lastGuess.style.fontSize = '30px'
     clue.innerText = 'This guess is too high';
     clue.style.color = 'black';
  } else if(guess === randomNumber) {
     lastGuess.innerText = 'BOOM!!!';
     lastGuess.style.fontSize = '50px';
     clue.style.color = 'black';
     winGame();
     console.log(randomNumber);
  } else {
     displayTheLastGuess.innerText = '';
     clue.innerText = 'ERROR: Please enter a value from ' + min + ' to ' + max;
     clue.style.color = 'red';
  }
});

clearButton.addEventListener('click',function(event) {
  event.preventDefault();
  userGuess.value = '';
  clearButton.disabled = true;
  guessButton.disabled = true;
});

resetButton.addEventListener('click',function(event) {
  event.preventDefault();
  userGuess.value = '';
  clue.innerText = 'Pick a number between 1 and 100';
  clue.style.color = 'black';
  lastGuess.innerText = '';
  displayTheLastGuess.innerText = '';
  randomNumber = newRandomNumber();
  console.log(randomNumber);
  clearButton.disabled = true;
  resetButton.disabled = true;
  guessButton.disabled = true;
});

userGuess.addEventListener('input', function() {
  clearButton.disabled = false;
  resetButton.disabled = false;
  guessButton.disabled = false;
});

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  setRange();
});

function newRandomNumber () { 
  return Math.floor((Math.random() * (max-min)) + min);
}

function setRange () {
  min = parseInt(changeMin.value);
  max = parseInt(changeMax.value);
  randomNumber = newRandomNumber();
  console.log(randomNumber);
  clue.innerText = 'Enter a value from ' + min + ' to ' + max;
  clue.style.color = 'black'
}

function winGame () {
  min = min - 10;
  max = max + 10;
  randomNumber = newRandomNumber();
  clue.innerText = 'Enter a value from ' + min + ' to ' + max;
  clue.style.color = 'black';
}