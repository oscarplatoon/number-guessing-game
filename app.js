console.log("HELLO OSCAR PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

randomNumber = Math.floor(Math.random()*100 + 1)
console.log(randomNumber)

const lowGuess = "Your guess was lower than the target number."
const highGuess = "Your guess was higher than the target number"
const correct = "Your guess was correct, You Win!"
const guess = () => {
  const userInput = document.getElementById('guess-input')
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