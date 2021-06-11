const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');
const history = document.getElementById('history');
const guessResult = document.getElementById('guess-result');

let randomNumber;

const someFunction = () => {
  randomNumber = Math.floor(Math.random() * 101);
}

const guessNumber = (guess) => {
  let text;
  if (guess === randomNumber) {
    text = document.createTextNode(' | You have guessed the right number!')
    inputField.remove();
    submitButton.remove();
  } else if (guess > randomNumber) {
    text = document.createTextNode(' | Too high!')
  } else if (guess < randomNumber) {
    text = document.createTextNode(' | Too low!')
  }

  // add guess to guesses history
  let li = document.createElement('li');
  let guessText = document.createTextNode(guess);
  li.appendChild(guessText);
  li.appendChild(text);
  history.prepend(li);
}

someFunction();

submitButton.addEventListener('click', () => {
  let userInput = inputField.value;
  if (userInput.length === 0) {
    return;
  } else {
    let guess = parseInt(userInput);
    guessNumber(guess);
  }
})


console.log(randomNumber);