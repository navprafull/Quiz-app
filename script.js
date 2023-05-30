// Quiz questions and answers
const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  
  // Function to start the quiz
  function startQuiz(event) {
    event.preventDefault();
  
    const playerName = document.getElementById("name").value;
    if (!playerName) {
      alert("Please enter your name");
      return;
    }
  
    localStorage.setItem("playerName", playerName);
  
    window.location.href = "quiz.html";
    startTimer();
    displayQuestion();
  }
  
  // Function to start the timer
  function startTimer() {
    let time = 60; }// Set the time limit in seconds
  
    timer = setInterval(() => {
      const timerElement = document.getElementById("timer");})
