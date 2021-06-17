console.log("HELLO OSCAR PLATOON!")

let randomNumber = 0;

const pickRandomNumber = () => {
  randomNumber = Math.ceil(Math.random() * 100);
  return randomNumber;
}

pickRandomNumber();

const lowGuess = "Your guess was lower than the target number."
const highGuess = "Your guess was higher than the target number"
const correct = "Your guess was correct, You Win!"

document.getElementById('submit-button').onclick = () => {
  console.log('CLICKED')
  let guessNumber = document.getElementById('guess-input').value
  document.getElementById('guess-input').value = ""
  addGuessToList(guessNumber)
  return checkGuess(guessNumber)
}

const checkGuess = (number) => {
  if(number == randomNumber) {
    document.getElementById('game-output').innerHTML =
    correct
  }
  else if(number > randomNumber) {
    document.getElementById('game-output').innerHTML =
      highGuess
  } else if(number < randomNumber ) {
    document.getElementById('game-output').innerHTML =
      lowGuess
  }
}

const addGuessToList = (number) => {
  let newElem = document.createElement('LI');
  const numText = document.createTextNode(number)
  newElem.appendChild(numText)
  const numList = document.getElementById('guess-list')
  numList.appendChild(newElem)
}
