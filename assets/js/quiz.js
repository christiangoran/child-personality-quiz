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
    // Disables buttons after selecting until next round of questions 
    choice.disabled = true;
    if (choice !== target) {
      // disable other buttons during timeout (prevent logging duplicate results)
      choice.disabled = true;    
      } else {
        choice.classList.add("selected");
        // logs the personality connected to that answer to userScore
        //logScore();
        logScore(choice);
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
            }, 300);
      }
  });
}

function logScore(choice) {
  const currentQuestion = questions[0]; // get the current question which is always 0 due to splice at row 85
  const selectedAnswer = currentQuestion.arrayAnswers.find(answer => answer.answerText === choice.innerText); // find the selected answer object
  const points = selectedAnswer.points; // get the points value from the selected answer object
  userChoices.push(points); // add the points value to the userChoices array
}

function resetButton() {
  answers.forEach(choice => {
      choice.disabled = false;
  });
}

//------------------------------------------------------------------------------------------//
//-------------------------------------- Questions Array----------------------------------- //
//------------------------------------------------------------------------------------------//
const questions = [{
  questionNumber: 1,
  questionsText: 'What was your favorite toy as a child?',
  arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Barbie dolls',
      points: 5
    }, 
    {
      answerNumber: 2,
      answerText: 'Legos',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'Beanie Babies',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Tamagotchi',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'Power Rangers action figures',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Polly Pocket',
      points: 0
    }
  ]
},
{
  questionNumber: 2,
  questionsText: 'Which of the following movies did you love as a child?',
  arrayAnswers: [{
    answerNumber: 1,
    answerText: 'The Lion King',
    points: 5
    },
    {
      answerNumber: 2,
      answerText: 'Toy Story',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'Home Alone',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Babe - A little pig goes a long way',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: "Harry Potter and the Philosopher's Stone",
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'The Mighty Ducks',
      points: 0
    }
  ]
},
{
    questionNumber: 3,
    questionsText: 'Which of these TV shows did you watch the most as a child?',
    arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Rugrats',
      points: 5
    },
    {
      answerNumber: 2,
      answerText: 'Pokemon',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'Power Rangers',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Hey Arnold!',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'DuckTales',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Sailor Moon',
      points: 0
    }
  ]
},
{
  questionNumber: 4,
  questionsText: 'Which of these video games did you enjoy playing the most as a child?',
  arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Super Mario Bros.',
      points: 5
    },
    {
      answerNumber: 2,
      answerText: 'Sonic the Hedgehog',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'The Legend of Zelda: Ocarina of Time',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Pokemon Red/Blue',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'Crash Bandicoot',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Donkey Kong Country',
      points: 0
    }
  ],
},
{
  questionNumber: 5,
  questionsText: 'Which of these snacks did you love as a child?',
  arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Snickers bar',
      points: 5
    },
    {
      answerNumber: 2,
      answerText: 'Haribo gummy bears',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'Kinder Surprise chocolate eggs',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Fizzy cola bottles',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'Hubba Bubba bubble gum',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Skittles',
      points: 0
    }
  ],
},
{
  questionNumber: 6,
  questionsText: 'Which of these pop stars did you idolize as a child?',
  arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Britney Spears',
      points: 5
    },
    {
      answerNumber: 2,
      answerText: 'NSYNC',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'Oasis',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Backstreet Boys',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'Ace of Base',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Spice Girls',
      points: 0
    }
  ],
},
{
  questionNumber: 7,
  questionsText: 'Which of these trends did you participate in as a child?',
  arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Beanie Babies collecting',
      points: 5
    },
    {
      answerNumber: 2,
      answerText: 'Game Boy hard core gaming',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'Garbage Pail Kids',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Turtles action figures',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'Platform shoes',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Mood ring wearing',
      points: 0
    }
  ],
},
{
  questionNumber: 8,
  questionsText: 'Which of these board games did you enjoy playing the most as a child??',
  arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Monopoly',
      points: 5
    },
    {
      answerNumber: 2,
      answerText: 'Candy Land',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'Clue',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Life',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'Sorry!',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Operation',
      points: 0
    }
  ],
},
{
  questionNumber: 9,
  questionsText: 'Which of these outdoor activities did you enjoy most as a child?',
  arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Jump rope',
      points: 5
    },
    {
      answerNumber: 2,
      answerText: 'Skateboard',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'Hopscotch',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Playing marbles',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'Four square',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Soccer',
      points: 0
    }
  ],
},
{
  questionNumber: 10,
  questionsText: 'Which of these school subjects did you excel in the most as a child?',
  arrayAnswers: [{
      answerNumber: 1,
      answerText: 'Math',
      points: 5
    },
    {
      answerNumber: 2,
      answerText: 'Science',
      points: 4
    },
    {
      answerNumber: 3,
      answerText: 'English',
      points: 3
    },
    {
      answerNumber: 4,
      answerText: 'Art',
      points: 2
    },
    {
      answerNumber: 5,
      answerText: 'Social studies',
      points: 1
    },
    {
      answerNumber: 6,
      answerText: 'Physical Education',
      points: 0
    } 
  ] 
}]


//------------------------------------------------------------------------------------------//
//-------------------------------------- Personality Array----------------------------------- //
//------------------------------------------------------------------------------------------//
let personalities = [{

  type: 'popular',
  name: "The Popular Kid",
  text: "You were social and outgoing as a child, and likely had a large circle of friends. You enjoyed being the center of attention and were interested in fashion, pop culture, and the latest trends."

},
{
  type: 'creative',
  name: 'The Creative Type',
  text: "You were imaginative and artistic as a child, and enjoyed expressing yourself through various forms of creativity, such as drawing, writing, or music."
},
{
  type: 'collector',
  name: 'The collector',
  text: "You had a love for collecting things as a child, whether it was Beanie Babies, Pokemon cards, or other toys. You were likely organized and detail-oriented, and enjoyed the thrill of completing a set."
},
{
  type: 'tech',
  name: 'The tech-savvy kid',
  text: "You were fascinated by technology and video games as a child, and were likely an early adopter of new gadgets and devices. You enjoyed problem-solving and exploring new worlds through the screen."
},
{
  type: 'adventure',
  name: 'The Adventurous One',
  text: "You were active and outgoing as a child, and enjoyed trying new things and exploring the outdoors. You had a thirst for adventure and likely participated in sports or other physical activities."
},
{
  type: 'fashion',
  name: 'The Fashionista',
  text: "You were stylish and trendy as a child, and enjoyed experimenting with fashion and accessories. You had a keen eye for design and aesthetics, and enjoyed expressing yourself through your appearance."
},
]