
const startButton = document.getElementById('start-button');
const startArea = document.getElementById('start-area');

const questionArea = document.getElementById('question-area');
const questionParagraph = document.getElementById('question-paragraph');

const answerArea = document.getElementById('answer-area');
const answers = document.getElementsByClassName('answer-button');

const pieArea = document.getElementById('pie-area');

const resultArea = document.getElementById('result-area');

function startGame(event) {

event.preventDefault();


console.log('game started')

  startArea.classList.toggle('hide');
  answerArea.classList.toggle('hide');
 
}

function addQuestions() {

}

function userAnswer() {

}

function handleAnswer() {

}