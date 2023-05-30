const names = document.getElementById('name')

const time = document.getElementById('queTime');

const question = document.getElementById('questions');

const attempt = document.getElementById('quesAttempt');

const correct = document.getElementById('queCorrect');

const wrong = document.getElementById('queWrong');

const percent = document.getElementById('quePercentage');


const start = document.getElementById('start');

const home = document.getElementById('home');


names.innerText= localStorage.getItem('playerName')

// percent.innerText = (score/questionNo)*100

// start.addEventListener('click' , ()=>{
//     location.href="probability.html"
// })

// home.addEventListener('click' , ()=>{
//     location.href="index.html"
// })

