  // Consts for Start area //
  const startArea = document.querySelector('.start-area');

  // Consts for questions //
  const questionArea = document.querySelector('#question-area');
  const questionParagraph = document.querySelector('#question-paragraph');


  // Consts for answers //
  const answerArea = document.querySelector('.answer-area');
  const answers = Array.from(document.querySelectorAll('.answer-button'));

  const progress = document.querySelector('#progress');

  // Results //
  const resultArea = document.querySelector('#result-area');
  const pieArea = document.querySelector('#pie-area');
  const progressArea = document.querySelector('#progress');
  const catParagraph = document.querySelectorAll('.stats');
  const personalityHeader = document.querySelector('#personality');
  const personalityParagraph = document.querySelector('#personality-paragraph');
  const restartButton = document.querySelector('#start-again-div');

  let userChoices = []; // Logs the users choice of each of the 6 answers for every question. //

  let result = []; // Function calls on userChoices and convert stats into percentage stats of each button pressed and returns it in the result variable //

  let nameInput = document.getElementById('name-input'); // Name input and gamestart //

  /**
   * The function adds eventlisteners and executes the game after the user has entered a name. 
   */
  function startGame(event) {
    event.preventDefault();
    answers.forEach(choice => { // Learned more about arrow functions: https://www.youtube.com/watch?v=h33Srr5J9nY
      choice.addEventListener('click', () => {
        handleAnswer(choice);
      });
    });

    if (nameInput.value !== "") { // if username is entered quiz can start when button is pressed //
      answerArea.classList.remove('hide');
      startArea.classList.add('hide');
      addQuestions(0);
    } else {
      alert('Please enter your name to start the quiz.'); // otherwise user is asked to enter name //
    }

  }

  /**
   * The function populates html-elements with question and the corresponding six answers. In total 10 questions. 
   */
  function addQuestions(index) {
    let activeQuestion = questions[index];
    questionParagraph.innerHTML = activeQuestion.questionsText; //Populate Question
    let choices = activeQuestion.arrayAnswers;
    for (let choice of choices) { // Populate all 6 answer-buttons ( used w3Schools to learn more on loops https://www.w3schools.com/js/js_loop_for.asp) //
      let i = choices.indexOf(choice);
      answers[i].innerHTML = choice.answerText;
    }
    let questionNumber = questions[0].questionNumber; // Show the user the progress on the quiz x/10 //
    progress.innerHTML = `Question ${questionNumber} /10`;

  }

  /**
   * The function registers each answer and keeps count of the 10 questions, removes active question of the question array before calling 
   * for function that populates the next round of question and answers. This function also provides button responsiveness.
   * When 10 questions has been answered the function calls for result-related functions and hide/show necessary html-elements.
   */
  function handleAnswer(target) {
    answers.forEach(choice => {
      choice.classList.remove("selected"); // Selected class provides user with responsiveness when selecting a choice //
      choice.disabled = true; // Disables buttons after selecting until next round of questions //
      if (choice !== target) {
        choice.disabled = true; // disable other buttons during timeout (prevent logging duplicate results)
      } else {
        choice.classList.add("selected");
        logScore(choice); // logs the personality connected to that answer to userScore
        console.log(userChoices);
        setTimeout(function () { // Will give a short delay between selecting an answer and getting the next question
          if (questions.length <= 1) { // Will calculate results if game ended or remove current question from array and replace with next question or 
            answerArea.classList.add('hide'); // Removes answerbuttons if quiz is completed //
            resultArea.classList.remove('hide'); // Reveals result div if quiz is completed //
            questionArea.classList.add('hide'); // Removes question div if quiz is completed //
            pieArea.classList.remove('hide'); // Reveals answer stats pie chart if quiz is completed //
            progressArea.classList.add('hide'); // Removes progress if quiz is completed //
            catParagraph.forEach(paragraph => { // Reveals all category stats paragraphs if quiz is completed //
              paragraph.classList.remove('hide');
            });
            answerResult(userChoices);
          } else {
            questions.splice(0, 1); // Removes first question in array for each round //
            addQuestions(0); // And calls for functin to populate html with next question and answers //
            choice.classList.remove("selected"); // Removes active state of answer button for next round of answers //
            resetButton();
          }
        }, 300);
      }
    });
  }

  /** 
   * The function takes the current question in the array, finds the corresponding point related to the given answer
   * and logs the user choice into the userChoices array.
   */
  function logScore(choice) {
    const currentQuestion = questions[0]; // get the current question which is always 0 due to splice at row 94
    const selectedAnswer = currentQuestion.arrayAnswers.find(answer => answer.answerText === choice.innerText); // find the selected answer object
    const points = selectedAnswer.points; // get the points value from the selected answer object
    userChoices.push(points); // add the points value to the userChoices array
  }

  // Used this page to understand how to count number of times something appears in an array: https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array //
  /**
   * The function takes the resulting array of logged user choices as an argument and calculates the choice stats in percentages and puts
   * the values into an object called "result". Then it calls for functions that uses the result-object as an argument.
   */
  function answerResult(userChoices) {
    result = { // I create an empty result object where each personality has 0% //w
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    userChoices.forEach(choice => { // Here I add a point (questions.arrayAnswers.point) to each personality in userChoices array //
      result[choice] += 1;
    });
    for (let key in result) {
      let percentage = Math.round((result[key] / userChoices.length) * 100); // Evens up the result into an int that can be used as a percentage value // 
      result[key] = percentage;
    }
    populatePie(result);
    findWinner(result);
    populateStatParagraphs(result);
    console.log('result is', result);
    return result;
  }


  /**
   * The function takes the result object (from answerResult function) and takes the key with the highest value, 
   * which will be the winning personality and then calls for the winningPersonality function.
   */
  function findWinner(result) {
    let maxPercentage = 0;
    let winningKey;
    for (let key in result) {
      if (result[key] > maxPercentage) { // Learned more about finding largest number in an array here: https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/ //
        maxPercentage = result[key];
        winningKey = key;
      }

    }
    winningPersonality(winningKey);
    return winningKey;
  }

  /**
   * The function takes the winningKey argument (from the findWinner function), brings out the corresponding key and values from personality array and then populates
   * the necessary header and paragraph in the results-div.
   */
  function winningPersonality(winningKey) {
    for (let i = 0; i < personalities.length; i++) {
      if (personalities[i].number.toString() === winningKey) {
        console.log('The winning personality is:', personalities[i].name);
        personalityHeader.innerHTML = `${nameInput.value}, <strong>you were clearly</strong><br>${personalities[i].name}`;
        personalityParagraph.innerHTML = personalities[i].text;
      }
    }
  }

  /**
   * The function converts the values from result object (answerResult function) to an array called pieArray, and then calls for the buildPie function 
   * where the pieArray will be used to create a pie chart out of users results.
   */
  function populatePie(results) {
    let pieArray = [];
    pieArray = Object.values(results);
    pieArray.sort((a, b) => b - a); // https://www.samanthaming.com/tidbits/76-converting-object-to-array/  //
    buildPie(pieArray);
    return pieArray;
  }

  /**
   * The function uses the result object (answerResult function), sorts them in descending order and according to the name of each personality
   *  before populating related html element to show how many percent the user got in each personality.
   */
  function populateStatParagraphs(result) {
    const renamedResult = { // Create a new object with renamed keys //
      Popular: result[0],
      Creative: result[1],
      Collector: result[2],
      Techie: result[3],
      Adventurer: result[4],
      Fashionista: result[5]
    };

    const sortedResult = Object.entries(renamedResult) // Sort the object by values in descending order //
      .sort(([, a], [, b]) => b - a)
      .reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value
      }), {});

    const paragraphs = document.querySelectorAll('.stats'); // Populate the paragraphs with the class name "stats" through looping them out //
    let i = 0;
    for (let [key, value] of Object.entries(sortedResult)) {
      if (i >= paragraphs.length) break;
      paragraphs[i].textContent = `${key}: ${value}%`;
      i++;
    }
  }

  /**
   * The function restarts the answer buttons for the next round of answers
   */
  function resetButton() {
    answers.forEach(choice => {
      choice.disabled = false;
    });
  }

  restartButton.addEventListener('click', function () { // Adds an eventlistener to the restart quiz button in the end //
    window.location.reload();
  });

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
    }
  ];


  //------------------------------------------------------------------------------------------//
  //-------------------------------------- Personality Array----------------------------------- //
  //------------------------------------------------------------------------------------------//
  let personalities = [{

      number: 0,
      type: 'popular',
      name: "The Popular Kid",
      text: "You were social and outgoing as a child, and likely had a large circle of friends. You enjoyed being the center of attention and were interested in fashion, pop culture, and the latest trends."

    },
    {
      number: 1,
      type: 'creative',
      name: 'The Creative Type',
      text: "You were imaginative and artistic as a child, and enjoyed expressing yourself through various forms of creativity, such as drawing, writing, or music."
    },
    {
      number: 2,
      type: 'collector',
      name: 'The collector',
      text: "You had a love for collecting things as a child, whether it was Beanie Babies, Pokemon cards, or other toys. You were likely organized and detail-oriented, and enjoyed the thrill of completing a set."
    },
    {
      number: 3,
      type: 'tech',
      name: 'The tech-savvy kid',
      text: "You were fascinated by technology and video games as a child, and were likely an early adopter of new gadgets and devices. You enjoyed problem-solving and exploring new worlds through the screen."
    },
    {

      number: 4,
      type: 'adventure',
      name: 'The Adventurous One',
      text: "You were active and outgoing as a child, and enjoyed trying new things and exploring the outdoors. You had a thirst for adventure and likely participated in sports or other physical activities."
    },
    {
      number: 5,
      type: 'fashion',
      name: 'The Fashionista',
      text: "You were stylish and trendy as a child, and enjoyed experimenting with fashion and accessories. You had a keen eye for design and aesthetics, and enjoyed expressing yourself through your appearance."
    },
  ];