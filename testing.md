# What Type of Child Were You Quiz - Testing

![Mock-up](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/actual-site.png)

#### **By Christian Göran**
[Click here to view the live web application](https://christiangoran.github.io/child-personality-quiz/)

This is the testing documentation for my web application: What Type of Child Were You Quiz.

[Full README available here](README.md)


## Table of Contents

1. [Introduction](#introduction)
2. [Automated Testing](#automated-testing)
    * [HTML Validation](#html-validation)
    * [CSS Validation](#css-validation)
    * [JavaScript Validation](#javascript-validation)
    * [Accessibility](#accessibility)
    * [Performance](#performance)
3. [Manual Testing](#manual-testing)
    * [Testing User Stories](#testing-user-stories)
    * [Feature Testing](#feature-testing)
        * [Responsiveness / Device Testing](#responsiveness--device-testing)
        * [Browser Compatibility](#browser-compatibility)
        * [Feature Testing Results Table](#feature-testing-results-table)
4. [Bugs & Fixes](#bugs--fixes)
    * [Known & Remaining Bugs](#known--remaining-bugs)

- - -

## Introduction

In my testing I developed a comprehensive testing plan to make sure that the site was functioning correctly. I used predominantly manual testing, 
I did investigate the option of writing bespoke automated tests and ran a few trial tests at the end of the development process as part of my own 
learning and personal development, but due to the way I had written the JavaScript and the resulting complexity of the automated testing that 
I would need to write, I felt that it was not necessary for this application as it was a fairly simple app that would be better served by in-depth 
manual testing which I have detailed below.

My manual testing involved going through the game and manually checking all elements behaved as expected and making sure that the JavaScript 
was producing the correct results based on the user selections. I have also included details of automated testing/validation that I undertook 
which included validation for HTML & CSS and checking the site for accessibilty and performance. The site was tested throughout the process, 
both in the development and deployed version of the sites. All the test results detailed below are based on the 
[deployed site](https://christiangoran.github.io/child-personality-quiz/). 

## Automated Checks and Validation

### HTML Validation

I ran the code for all the pages through the [W3C HTML Validator](https://validator.w3.org/nu/).

#### **Errors**

There were now errors found.


#### **HTML Validation Post-Fix**

None required.

### CSS Validation

I ran the CSS code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input). 

#### **Errors**
<details><summary>CSS Validation Initial Results</summary>
<img src="https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/wc3-css-validation.png">
</details>

There were 3 errors:

Error 1: #restart-button | Value Error : height Unknown dimension 5wv 
* Fix: remove height value (not doing anything)

Error 2-3: 
200 	#categories p 	Value Error : line-height auto is not a line-height value : auto
309 	#categories p 	Value Error : line-height auto is not a line-height value : auto 
* Fix: remove height value (not doing anything)


#### **CSS Validation Post-Fix**

<details><summary>CSS Validation Final Results</summary>
<img src="https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/w3-css-pass.png">
</details>

- - -

### JavaScript Validation

I ran the JavaScript code through [JSHint](https://jshint.com/). 

There were no errors and at first I got over 70 warnings. After a short research I wound that if adding "/*jshint esversion: 6 */" to the top
of the console the warnings were reduced to 4 warnings, 1 undefined variable, 3 unused variables.

<details><summary>Warning</summary>
<img src="https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/jshint.png">
</details>

* Fix: remove or add semi-colons as appropriate

Warning: "The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype."

* Fix: I did extensive investigation about this warnings, it seems to typically occurs when you loop through an object using a 
for...in loop without checking whether the object has its own property or the inherited property from its prototype.

    //To fix this issue, I used the hasOwnProperty method to check whether the property belongs to the object or its prototype.
    (https://www.educative.io/answers/what-is-the-hasownproperty-method-in-javascript)
    
    ```
    function findWinner(result) {
    let maxPercentage = 0;
    let winningKey;
    for (let key in result) {
        if (result.hasOwnProperty(key)) {
      if (result[key] > maxPercentage) { // Learned more about finding largest number in an array here: https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/ //
        maxPercentage = result[key];
        winningKey = key;
      }
    }
   }
   ```
 Warning: 'Object spread property' is only available in ES9
 
 * I added "/*jshint esversion: 9 */" to the top of the console and the warning disappeared.
 
 <details><summary>One ndefined Variable</summary>
<img src="https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/jshint-undefined-variable.png">
</details>
   
One Undefined variable (buildPie) is used in another js-file called piechart.js.


<details><summary>Warning 5: Undeclared/Unused Variables</summary>
<img src="https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/jshint-unused-variables.png">
</details>

* Fix: remove undeclared variables where appropriate. One of these warnings was due to the function being called in index.html to handle the 
form submission for the username. This was shown to us as good practice for handling form submission by Code Institute so I left it as it 
was (see code snippet below).

    ```
    // In index.html
    <form id="start-form" method="POST" onsubmit="startGame(event)">

    // in quiz.js
    function startGame(event)
    ```


#### **JavaScript Validation Post-Fix**

<details><summary>JavaScript Validation Final Results</summary>
<img src="docs/testing/testing_jsval_final.jpeg">
</details>


- - -

### Accessibility

I ran the site through the [Wave Web Accessibility Evaulation Tool](https://wave.webaim.org/). 

#### **Accessibility Errors**

There were no errors. However I had 6 warnings.

<details><summary>Accessibility warnings</summary>
<img src="https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/accessibility-warnings.png">
</details>

* Fix: change <p> to <h3>

There were no errors or warnings on 404.html.

#### **Wave Web Accessibility Results Post-Fix **

<details><summary>Wave Web Accessibility Final Results - index.html</summary>
<img src="docs/testing/testing_waveval_final.jpeg">
</details>

<details><summary>Wave Web Accessibility Final Results - 404.html</summary>
<img src="docs/testing/testing_waveval_final2.jpeg">
</details>

- - -

### Performance

I ran the site through Google Chrome Dev Tools' Lighthouse to check on its performance.

#### **Original Results**
<details><summary>Main Page</summary>
<img src="https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/lighthouse-results.png">
</details>

There were 2 issues of concern: 

1. The performance score was somewhat lower because of the piechart.js file with the pieChart function that seem to slow the process down. However the 
score is still on an acceptable level.

2. The SEO score was somewhat lower as well due to missing meta text i the HTML. The solution for this was to define keywords and a description of the 
web site.


#### **Final Results**
<details><summary>Main Page</summary>
<img src="docs/testing/testing_lh_main_desktop_final.jpeg">
</details>

- - -
## Manual Testing
### Testing User Stories

I tested the site based on my user stories:

| No. | User Goal | How is it achieved? |
| :--- | :--- | :--- |
| 1 | Learning more about myself and my childhood personality | The quiz is a fun, online game which gave me a resulting personality after answering the questions |
| 2 | Having fun doing a short quiz | I am of course bias, as well as the fact that I've taken the quiz at least a hundred times while testing the site. Nonetheless I had great fun making the quiz as well as playing it |
| 3 | Having a nice walk down memory lane | When seeing the different answers to each question I definitely take a walk down memory lane |
| 4 | I want to access the quiz on any device | The quiz has been designed to be fully responsive across desktop, tablet and mobile and extensively tested on each.|
| 5 | I want to navigate the site easily | The site has a linear navigation where you follow the quiz through and minimal clicks are required to submit answers. At the end there is a button to take you back to the beginning of the quiz.|

- - -
### Feature Testing

#### **Responsiveness / Device Testing**

The site was tested on the following devices
* Apple Macbook Pro 16inch
* Apple Display 27 - inch
* Apple iPhone 11
* Samsung Galaxy
* Google Chrome Developer Tools - simulator for all different device options as well as using the adjustable sizing options


**Bugs found - specific to device testing:**
* [Google Map API on mobile & Safari - border-radius](#2-google-map-api-on-mobile--safari---border-radius)
* [Mobile input zoom-in not resetting](#4-mobile-input-zoom-in-not-resetting)
* [Button colour on mobile](#5-button-colour-on-mobile)
* [Button styling on mobile](#8-button-styling-on-mobile)
* [IPhone 5S Safari 12.0 - Various Bugs](#11-iphone-5s-safari-120---various-bugs)
* [Scrolling too far on highlight marker click on small screens](#12-highlight-marker-click-scrolls-too-far-on-smaller-screens)


- - -
#### **Browser Compatibility**

The site was tested on the following browsers.
* Google Chrome
* Safari v.16.3
* Mozilla Firefox v.112.0.1

**Bugs found - specific to browser testing:**
* [Console Error - Permissions Policy Header: on Chrome](#10-console-error-on-chrome-error-with-permissions-policy-header)
* [IPhone 5S Safari 12.0 - Various Bugs](#11-iphone-5s-safari-120---various-bugs)


- - -
### Feature Testing Results Table

**Every Page / Section**
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Whole Page | Layout is fully responsive | Checked all pages on various browsers and devices including Google Dev Tool device simulators | All elements were fully responsive on all devices tested | Pass |
| Main Page Contents | Background gradient, footer & footer contents appear correctly and remain visible througout game | Checked on various browsers and devices throughout game | All content appeared as expected | Pass |
| Favicon | Appears in browser tab | Checked browser tabs in different browsers and devices | Favicon appeared as expected | Pass |
| Footer Social Links | Hover Effect with transition on hover | Hovered on icons | Hover colour change happens as expected | Pass |
| Footer Social Links | Open correct pages in separate tab | Clicked on social links | Links open correctly in separate tab | Pass |
| Console | No errors appear in console throughout game | Checked console in dev tools during game play | Console logged no errors. Warnings relating to Google Maps API did appear [more information here](#6-google-maps-api---console-errors) | Pass |

**Start Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Start Div Contents | Text, name input & start game button appear correctly | Loading page | All content appeared as expected | Pass |
| Start Section | Loads on page refresh - no other parts of game visible | Loading page | The correct divs load as expected | Pass |
| Name Input | Allows user to input name | Inputting name | User is able to input name | Pass |
| Name Input | User must enter name between 2-10 characters | Attempted to enter a name shorter than 2 & longer than 10 characters | Input box performs as expected | Pass |
| Start Quiz Button | Hover effect with transition on hover | Hovered on Start Quiz Button | Hover effect works as expected ![Screen Recording](docs/testing/testing_features_welcome2.gif) | Pass |
| Start Quiz Button | If no name inputted alert appears & game doesn't start | Clicked on start button with no name inputted | Alert pops up with message telling user to enter a name ![Screenshot](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/name-required.png) | Pass |
| Start Quiz Button | Starts Quiz (hides start div and answers div) | Clicked on start game button (with username entered) | Game starts, start div disappears and answers div appears | Pass |

**Game Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Game Div Contents | Progress text, progress indication, question text, 6x answer buttons with text contents appear correctly  | Clicking start game button in Start Div | All content appeared as expected | Pass |
| Question & Answers | Correct question and answers load each time an answer is selected | Clicking through game and checking against questions and answers in questions array | All questions and answers appear as expected | Pass |
| Question & Answers | 10 questions & sets of answers appear in total | Clicking through game and counting questions | The correct number of questions appear | Pass |
| Answer Boxes | Hover Effect with transition on hover | Hovered on questions | Hover effect works as expected | Pass |
| Answer Boxes | Colour changes to red with transition when user selects an answer | Clicked on answer | Answer box changes colour as expected ![Anwer button](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/buttons-hover.png) | Pass |
| Answer Boxes | Brief timeout before question / answers refresh | Clicked on answer | Game pauses before refreshing | Pass |
| Answer Boxes | User cannot select another answer once a selection has been made during timeout | Clicked on an answer and attempted to select another quickly afterwards. Also checked console logs to if any additional answers were being added to the personalityTally array | Unable to select more than 1 answer during time out and nothing additional added to personalityTally | Pass |
| Answer Boxes | Colour of previously selected box changes back to original colour after question/answer refresh | Clicked on answer | Colour changes back on refresh as expected (see gif above) | Pass |
| Progress Indication | Increments each time a question is selected with the correct numbers & total number | Played game and checked progress indication | Progress indication increments correctly| Pass |
| Quiz functionality | Correct personality type is added to userChoice array when user selects an answer | Log userChoice to console for testing purposes and check it matches the selected answer | console logs match the selected answers | Pass |
| Quiz functionality | userChoice contains 10 personality types once main quiz is complete | Log userChoice to console for testing purposes and check number of items in array | code performs as expected | Pass |

**Results Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Personality Results Contents | Personality heading, pie chart, colour key, percentages & description appear correctly | Clicking on the final question | All content appeared as expected | Pass |
| Personality heading | Contains name inputted by user | Inputting name and checking it appears in results | Name appears correctly ![Screenshot](docs/testing/testing_features_results1.jpeg)![Screenshot](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/restart-button.png) | Pass |
| Personality heading | Contains correct personality type | Using console logs to check the winning personality at different stages of the game and checking it matches | Personality type appears correctly and matches the console logs | Pass |
| Pie chart | Pie sections & gradients match key | Visually checking the gradients match between the key and the pie chart | All gradients and percentages match | Pass |
| Pie chart | Results are correct based on user answers in game | Using console logs to check the percentages and matching those with the pie and key | All numbers, personality types and colours match | Pass |
| Pie chart | All personality types are listed in descending order | Checking that the percentages are in reverse order, largest to smallest | The personality types appear in the correct order | Pass |
| Pie chart | Percentages total 100 | Using console logs and testing the game with a tie break result (where the rounding issue occurs) and checking everything adds up | The percentages add up to 100 | Pass |
| Personality Description | Matches winning personality type | Using console logs to check the winning time at different stages of the code and matching it to what appears on the page | The correct personality description appears | Pass |
| Start Again Button | Appear in results window | Scroll down and checking content appears correctly | Button and text appear correctly | Pass |
| Start Again Button | Hover effect with transition on hover | Hovering over button | Button hover effect works correctly | Pass |
| Start Again Button | Refreshes page, hides results div and reveals start div | Clicking Start Again button and checking the page reloads back to the start page | The page reloads correctly back to the start div | Pass |

**404 Page**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| 404 page contents | Heading, text & 'go home' button appear correctly | Load 404 page, check all content is correct | All content appears correctly | Pass |
| 404 page functionality | Typing in a non-existent URL will bring up 404 page | Typing in a non-existent url on website | 404 page appears | Pass |
| Go Home Button | Hover effect with transition on hover | Hovering over Go Home button | Button hover effect works correctly ![Screen Recording](docs/testing/testing_features_404_1.gif) | Pass |
| Go Home Button | Refreshes page, hides results div and reveals welcome div | Clicking on Go Home button | Welcome page loads ![Screen Recording](docs/testing/testing_features_404_2.gif) | Pass |



- - -
## Bugs & Fixes

During development and testing I found the following bugs:
- - -
#### **1: Hover function on buttons does not work with touch screen devices **

I needed to remove hover effect on smallest media queries for screen size.

*Before & After*

- - -
#### **2: Problem statement **

problem statement

*Before & After*

<details><summary>Screenshots</summary>
<img src="url">
<img src="url">
*Before & After*
</details>

- - -

- - -


### Known & Remaining Bugs

All information about remaining bugs is included in the information above. Click on the links below to find out more details:




- - -
- - -

[Go to Top](#What-Type-of-Chile-Were-You-Quiz---testing)

[Go to README](README.md)
