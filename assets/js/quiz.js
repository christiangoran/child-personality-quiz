
function startGame(event) {
  event.preventDefault();

// Consts for Start area //
const startButton = document.getElementById('start-button');
const startArea = document.querySelector('.start-area');

// Consts for questions //
const questionArea = document.getElementById('question-area');
const questionParagraph = document.getElementById('question-paragraph');

// Consts for answers //
const answerArea = document.querySelector('.answer-area');
const answers = document.getElementsByClassName('answer-button');

const pieArea = document.getElementById('pie-area');

const resultArea = document.querySelector('#result-area');


// Name input and gamestart //
const nameInput = document.getElementById('name-input');

if (nameInput.value !== "") {
  answerArea.classList.remove('hide');
  startArea.classList.add('hide');
  addQuestions(q);

} else {

  alert('Please enter your name to start the quiz.')
}

}

function addQuestions() {

}

function userAnswer() {

}

function handleAnswer() {

}