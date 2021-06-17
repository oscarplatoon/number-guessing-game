console.log("HELLO OSCAR PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

let randomNumber = 0;
const pickRandomNumber = () => {
  randomNumber = Math.ceil(Math.random() * 100);
}

document.getElementById('submit-button').onclick = () => {
  let userNumber = document.getElementById('input-number').nodeValue;
  document.getElementById('input-number').value='';
  // console.log(userNumber);
  addNumberToList(userNumber);
  return checkNumber(+userNumber)
}

const checkNumber = (number) => {
  if (number === randomNumber) {
    document.getElementById('game-message').innerHTML = 'You guessed the number!!';
    document.body.style.backgroundImage = "";
  // console.log("You guessed the number!!");
  } else if (number > randomNumber) {
    // console.log("Guess a lower number.");
    document.getElementById('game-message').innerHTML = 'Guess a lower number.';
  } else {
    // console.log("Guess a higher number.");
    document.getElementById('game-message').innerHTML = 'Guess a higher number.';
  }
}

const addNumberToList = (number) => {
  let newElem = document.createElement("LIST");
  const numText = document.createTextNode(number);
  newElem.appendChild(node);

  const numList = document.getElementById("number-list");
  element.appendChild(para);

}
// window.onload = () => {
  pickRandomNumber()
  // console.log(pickRandomNumber)
// }

const doesUserExist = () => {
  if (localStorage.getItem('user-name')) {
    let userName = localStorage.getItem('user-name');
    document.getElementById('welcome'.innerHTML) = 'Welcome ${userName}';
    return document.getElementById('get-username').remove()
  }
}






document.getElementById('submit-username').onclick = () => {
  const userName = document.getElementById('user-name').value;
  // console.log(userName);
  
  if (userName.length > 0) {
  localStorage.setItem('user-name', document.getElementById('user-name').value);
  return doesUserExist();  
  }
}

doesUserExist();