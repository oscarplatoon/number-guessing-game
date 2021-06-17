console.log("HELLO OSCAR PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
let randomNumber = 0;

const pickRandomNumber = () => {
  randomNumber = Math.ceil(Math.random() * 100);
  return randomNumber;
}

pickRandomNumber();
console.log(randomNumber);

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
const guess = () => {
  const userInput = document.getElementById('guess-input')
  console.log(userInput)
  const lineBreak = document.createElement('br');
  const userGuessDiv = document.createElement('div');
  userGuessDiv.setAttribute('id', 'guess-log')
  const userGuessText = document.createTextNode(`Your guess was ${userInput.value}`)
  userGuessDiv.appendChild(userGuessText)
  let anchorDiv = document.getElementById('game-input')
  document.body.insertBefore(userGuessDiv, anchorDiv); 
  let gameAnswer = ""
  if(userInput.value > randomNumber) {
    userGuessDiv.appendChild(lineBreak)
    gameAnswer = highGuess
    gameAnswerChild = document.createTextNode(gameAnswer)
    userGuessDiv.appendChild(gameAnswerChild)
  } else if(userInput.value < randomNumber) {
      userGuessDiv.appendChild(lineBreak)
      gameAnswer = lowGuess
      gameAnswerChild = document.createTextNode(gameAnswer)
      userGuessDiv.appendChild(gameAnswerChild)
  } else if(userInput.value == randomNumber) {
      userGuessDiv.appendChild(lineBreak)
      gameAnswer = correct
      gameAnswerChild = document.createTextNode(gameAnswer)
      userGuessDiv.appendChild(gameAnswerChild)
  }

}