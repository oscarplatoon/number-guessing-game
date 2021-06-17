console.log("HELLO OSCAR PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

randomNumber = Math.floor(Math.random()*100 + 1)
console.log(randomNumber)

gameSolved = false

const guess = () => {
  userInput = document.getElementById('guess-input')
  console.log(userInput.value)
  if(userInput.value > randomNumber) {

  } else if(userInput.value < randomNumber) {

  } else if(userInput.value == randomNumber) {
    gameSolved = true;
  }

  if (gameSolved == true) {
    //set html on page to reflect the game is over.
  }
}