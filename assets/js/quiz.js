
function startGame(event) {
  event.preventDefault();

// Consts for Start area //
const startButton = document.getElementById('start-button');
const startArea = document.querySelector('.start-area');

// Consts for questions //
const questionArea = document.querySelector('#question-area');
const questionParagraph = document.querySelector('#question-paragraph');

// Consts for answers //
const answerArea = document.querySelector('.answer-area');
const answers = Array.from(document.querySelectorAll('.answer-button'));

const progress = document.querySelector('#progress');


const pieArea = document.getElementById('pie-area');

const resultArea = document.querySelector('#result-area');


// Name input and gamestart //
const nameInput = document.getElementById('name-input');

// if username is entered quiz can start when button is pressed //
if (nameInput.value !== "") {
  answerArea.classList.remove('hide');
  startArea.classList.add('hide');
  addQuestions(0);

} else {
// otherwise user is asked to enter name //
  alert('Please enter your name to start the quiz.')
}


// To understand how to extract values from array: https://www.programiz.com/javascript/examples/extract-value-array//
function addQuestions(index) {

  let activeQuestion = questions[index];
  questionParagraph.innerHTML = activeQuestion.questionsText;

  let choices = activeQuestion.answers;
  for (let i = 0; i < choices.length; i++) {
    answers[i].innerHTML = choices[i].answerText;
  }

 let questionNumber = questions[0].questionNumber;
  progress.innerHTML = `Question ${questionNumber} /10`;

}

function userAnswer(index) {



}


function handleAnswer() {

}

}