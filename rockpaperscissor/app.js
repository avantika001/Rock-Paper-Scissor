let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('comp-score');
const scoreBoard_div=document.querySelector('score_board');
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
main();
function main(){
rock_div.addEventListener('click',function(){
  game("r");
})

paper_div.addEventListener('click',function(){
  game("p");
})

scissor_div.addEventListener('click',function(){
  game("s");
})
}

function win(userChoice,computerChoice){
  userScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result_div.innerHTML=convertToLetter(userChoice)+" beats "+ convertToLetter(computerChoice)+".You win!";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);
}

function lose(userChoice,computerChoice) {
  computerScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result_div.innerHTML=convertToLetter(userChoice)+ " loses to "+convertToLetter(computerChoice)+".Computer wins!"
  document.getElementById(userChoice).classList.add('white-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('white-glow')},300);
}

function draw(userChoice,computerChoice) {
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result_div.innerHTML=convertToLetter(userChoice)+ " same as "+convertToLetter(computerChoice)+".Match draw!"
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},300);
}

function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function game(userChoice){
  const computerChoice=getComputerChoice();
  switch(userChoice + computerChoice){
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice,computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice,computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice,computerChoice);
      break;
  }
}

function convertToLetter(letter){
  if (letter==="r") return "Rock";
  if (letter==="p") return "Paper";
  return "Scissor";
}
