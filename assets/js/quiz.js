  // Consts for Start area //
  const startButton = document.getElementById('start-button');
  const startArea = document.querySelector('.start-area');

  // Consts for questions //
  const questionArea = document.querySelector('#question-area');
  const questionParagraph = document.querySelector('#question-paragraph');
  

  // Consts for answers //
  const answerArea = document.querySelector('.answer-area');
  const answers = Array.from(document.querySelectorAll('.answer-button'));
  const answerButtons = document.querySelectorAll('.answer-button');

  const progress = document.querySelector('#progress');


  const pieArea = document.getElementById('pie-area');

  const resultArea = document.querySelector('#result-area');

  // let currentQuestionIndex = 0;  <<--- If i can't make it work, perhaps I should re-think my approach and use this instead of questions.splice(0, 1) that I use on row.95
  let userChoices = [];
  let nameInput;

 

  // Name input and gamestart //
  nameInput = document.getElementById('name-input');

function startGame(event) {
    event.preventDefault();


  answers.forEach(choice => {
    choice.addEventListener('click', () => {
        handleAnswer(choice);            
     });
  });

  // if username is entered quiz can start when button is pressed //
  if (nameInput.value !== "") {
    answerArea.classList.remove('hide');
    startArea.classList.add('hide');
    addQuestions(0);

  } else {
  // otherwise user is asked to enter name //
    alert('Please enter your name to start the quiz.')
  }

}

  // To understand how to extract values from array: https://www.programiz.com/javascript/examples/extract-value-array //
  // To understand more how a quiz works: https://www.youtube.com/watch?v=riDzcEQbX6k&t=881s //
function addQuestions(index) {
  let activeQuestion = questions[index];
    questionParagraph.innerHTML = activeQuestion.questionsText;
    // Populate all 6 answer-buttons //
    let choices = activeQuestion.arrayAnswers;
    for (let choice of choices) {
      let i = choices.indexOf(choice);
      answers[i].innerHTML = choice.answerText;
    }
    // Qustion Progress x/10 //
    let questionNumber = questions[0].questionNumber;
    progress.innerHTML = `Question ${questionNumber} /10`;

    
}    

function handleAnswer(target) {
  answers.forEach(choice => {
    // Selected class provides user with responsiveness when selecting a choice
    choice.classList.remove("selected");
    choice.disabled = true;
    if (choice == target) {
        choice.classList.add("selected");
        // logs the personality connected to that answer to userScore
        logScore();
        // Give a short delay between selecting an answer and getting the next question
        setTimeout(function () {
            // remove current question from array and replace with next question or calculate results if game ended
            if (questions.length <= 1) {
                console.log('finished!')
            } else {       
                questions.splice(0, 1);
                addQuestions(0)
                choice.classList.remove("selected");
                resetButton();
            }
        }, 800);
      } else {
        // disable other buttons during timeout (prevent logging duplicate results)
        choice.disabled = true;
      }
  });
}

function logScore() {
}

function resetButton() {
  answers.forEach(choice => {
      choice.disabled = false;
  });
}
