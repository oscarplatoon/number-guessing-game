console.log("HELLO OSCAR PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
const randomNumGen = (max) => {
  return Math.floor(Math.random() * max);
}

let randomNumber = randomNumGen(100);

const myFunction = () => {
  let userInput = document.getElementById('my-input').value;

  let para = document.createElement("p");
  para.innerHTML = userInput;
  document.getElementById("myDiv").appendChild(para);

  numCheck(userInput)
  
}

const numCheck = (input) => {
  if (input == randomNumber){
    let responsePara = document.createElement("p");
    responsePara.innerHTML = "You guessed correct";
    document.getElementById("outputDiv").appendChild(responsePara);
  }
  else if (input < randomNumber){
    let responsePara = document.createElement("p");
    responsePara.innerHTML = "You guessed too low";
    document.getElementById("outputDiv").appendChild(responsePara);
  }
  else{
    let responsePara = document.createElement("p");
    responsePara.innerHTML = "You guessed too high";
    document.getElementById("outputDiv").appendChild(responsePara);
  }
} 
