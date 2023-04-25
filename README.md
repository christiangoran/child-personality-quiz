# What Type of Child Were You Quiz
Portfolio Project 2

![Website mockup](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/actual-site.png)

## Table of Contents

1. [Introduction](#introduction)
2. [UX - Project Development & Planning](#ux---project-development--planning)
    * [Strategy Plane](#strategy-plane)
    * [Scope](#scope)
    * [Design & Structure](#design--structure)
3. [Technologies Used](#technologies-used)
4. [Features](#features)
    * [All Page](#all-pages)
    * [Start Section](#start-section)
    * [Quiz Section](#quiz-section)
    * [Result Section](#result-section)
    * [Pie Section](#pie-section)
5. [Testing & Bugs](#testing--bugs)
6. [Deployment](#deployment)
    * [GitHub Page](#github-pages)
7. [Credits](#credits)

## Introduction

This is the documentation for my web application: What Type of Kid Were You Quiz. It has been built using HTML5, CSS3 & JavaScript for educational purposes as part of Code Institute’s Diploma in Web Application Development Course.

## UX - Project Development & Planning

### Strategy Plane

#### Project Purpose:
The purpose of this project is to create an engaging and interactive personality quiz that helps users discover what type of child they were. By answering a series of questions, users will be able to uncover traits and characteristics that were present during their childhood. This quiz will be created using JavaScript to provide a dynamic and interactive experience for users, with the final results being displayed at the end of the quiz. The quiz will not only provide entertainment for users but also encourage self-reflection and introspection, helping them to gain a better understanding of themselves and their own unique personalities.


#### Client Goals:

For my second portfolio project on my Diploma in Web Application Development with Code Institute, I created a child personality quiz as a learning tool for interactive frontend development and my first project using JavaScript. The goal of this project is to create an engaging and informative tool that helps users discover what type of child they were. By offering a unique and personalized experience, the quiz aims to attract a wide range of users and can be used as an engaging element on a larger web site. For education purposes I will treat this project as a real-world application.

 The client also hopes that the quiz will drive engagement with their brand and help them better understand the needs and preferences of their audience.

Engaging users with interactivity and a fun application on their site
Allowing users to learn more about themselves and their unique childhood traits
Providing insights and recommendations on how to work with different types of children

#### User Goals:
The primary goal for users taking this quiz is to gain a deeper understanding of their own childhood personality traits and to have fun! By answering a series of questions related to their childhood experiences and behaviors, users can receive a personalized result that highlights their unique perspective and helps them better understand themselves. The main purpose is however to bring the user down memory lane and hopefully remember situations and items that was important to them when growing up.

- User goals: 

  - Learning more about themselves and their childhood traits
  - Having fun doing a short quiz
  - Having a nice walk down memory lane
  - I want to access the quiz on any device
  - I want to navigate the site easily
  - Want to give a feeling of modern retro feeling in design

#### Opportunities


| Opportunity | Importance | Viability / Feasability |
|-------------|------------|-------------------------|
| Create an online presence | 5 | 5 |
| Creating a responsive quiz | 5 | 5 |
| Create a pie chart displaying user result | 5 | 5 |
| Create en engaging extra element for a larger website | 5 | 5 |
| Provide a display of progress in quiz | 5 | 5 |
| Create a short text explaining the winning personality | 5 | 5 |

### Scope:
Create a childhood personality quiz containing 10 questions, with 6 answers for each question and related 6 personalities.

- What will be included in the website is:
  - Large header as a part of a brutalist type designed website.
  - Introduction text
  - Question area
  - Answer area with 6 buttons
  - Results area
  - Pie chart area
  - Restart game button

Every question and corresponding answers are tied to 6 personalities and explanatory texts:
- The Popular Kid
  - You were social and outgoing as a child, and likely had a large circle of friends. You enjoyed being the center of attention and were interested in fashion, pop culture, and the latest trends.
- The Creative Type
  - You were imaginative and artistic as a child, and enjoyed expressing yourself through various forms of creativity, such as drawing, writing, or music.
- The Collector
  - You had a love for collecting things as a child, whether it was Beanie Babies, Pokemon cards, or other toys. You were likely organized and detail-oriented, and enjoyed the thrill of completing a set.
- The Tech-Savvy Kid
  - You were fascinated by technology and video games as a child, and were likely an early adopter of new gadgets and devices. You enjoyed problem-solving and exploring new worlds through the screen.
- The Adventurous One
  - You were active and outgoing as a child, and enjoyed trying new things and exploring the outdoors. You had a thirst for adventure and likely participated in sports or other physical activities.
- The Fashionista
  - You were stylish and trendy as a child, and enjoyed experimenting with fashion and accessories. You had a keen eye for design and aesthetics, and enjoyed expressing yourself through your appearance.  

Each time the user selects an answer it builds up the resulting picture of the user personality. At the end of the quiz the user will see the winning personality as well as a breakdown of their personality.


### Design & Structure

#### Wirefram Mockups and Color Card

I began by using the program Balsamiq, which was recommended by the Code Institute, to create low-fidelity wireframes that would help me organize the information priorities and site structure and get a sense of the size of each page.

![Quiz build wireframe](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/project2-wireframes.png)


After establishing the general structure of each page, I moved on to creating a full-color and image mockup in Figma to test the color selection I had decided on. I got inspired by the style Brutalism or Neo-Brutalism and chose my color scheme. High contrast and bold minimalistic design compositions with thick sans-serif fonts is typical for this type of design.
I thought the Brutalism style worked well in giving a touch of retro minimalistic commodore terminal feel to the design without being to obvious.


![Main page color mockup](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/project2-mockup.png)

![Color and Font-Family Card](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/project2-color-card.png)

#### Structure 

The structure of the site is informed by the scope, user and business goals as well as the principles of IXD (interaction design) to make sure I was conforming to users' expectations and making everything as intuitive as I could.

The site has a simple structure, and everything is contained on a single web page (index.html) with all the content replaced by the JavaScript code at different points in the game. There are 5 main divs within the page which appear and disappear depending on where you are in the game, these are:

- Start Area - a brief intro with a name capture input to personalise the user's results and a start game button
Game - the main game play area, with a progress bar, question, answer options to choose from and a 'restart game' button
- Question Area - the results of the quiz, showing the user's personality results breakdown in the form of a pie chart and text information as well as a recommended destination based on their responses to the quiz. This page also contains a button to take the user back to the start to begin the quiz again.
- Answer Area - Here the buttons with the answers related to the question appears when the game starts.
- Result Area - After all the questions are answered the result area appears with the winning personality and an eplanatory text related to the personality
- Pie Chart Area - Here the different personalities are broken down for the user.


### Design Choices

- An extremely minimalistic deisng as a design exploration into the style of Brutalism and I also think went well with a touch of retro into the design without being to obvoius with it.
- consistent use och border radius to give a soft, rounded feel

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Tools 

- Git
  - Used for version control via GitPod by using the terminal to Git and Push to GitHub
- GitHub
  - Used to store the project code after being created in GitPod / Git
- Gitpod
  - Used to create, edit & preview the project's code
- Balsamiq 
  - Was used to create the wireframe of the website
- Figma
  - Used to develop a full mockup including colours, fonts, proportions etc
- Google Fonts
  - Used to select & import the fonts to the project (Dela Gothic One & Darker Grotesque)
- Font Awesome
  - Used to add icons to the site
- Adobe Illustrator
  - Used to create the finished website mockup with two screen sizes
- Favicon.io
  - Used to create and add the favicon to the browser tab
- Chart.js
  - Used to create and style the pie chart based on user personality results

  ## Features

  ### All pages
  
  #### **Header**
  
  Across all sections of the website the header can be seen.
  The header is responsive and its size adjusts with the screen size all the way down to phone size screens.
  
  ![Header & Intro](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/header.png)

  #### **Favicon** 

  ![Header & Intro](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/favicon.png)

  #### **Footer**
  
The footer contains links to relevant social media sites
The footer social icons have aria labels to make them accessible
The footer social icons have a hover effect
The footer is responsive, the icons adjusts down to tablet-size screens and is replaced by a smaller image on mobile to make the design work and the site perform well.

  *Footer on desktop / tablet*
  
  ![Footer desktop](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/footer-desktop.png)

  ### Start Section
  
The start section contains the header clearly giving the user an idea of what the page is about, together with a call to action type text telling the user to go ahead and try the quiz.

![Start section](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/start-screen-desktop.png)

![Start section phone](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/start-area-phone.PNG)

- There is a text field where the user is required to enter a name to be able to start the game.

![Text field - name required](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/name-required.png)

  ### Quiz Section
  
  After the user has entered their name and pressed the start button, the name field, start button and introduction text disappears and in its place a question and six answer buttons appear.
  
  Question appears along with a progress indicator clearly showing the user how many questions the game consists of.
  ![Questions](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/progress.png)
  
  Besides the questions, there are also six answer buttons.
  ![Game area](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/answers-desktop.png)

  ### Result Section
  
  After the user has answered all ten questions the answer buttons and question area is removed and the results are displayed.
 
 And a frame showing the user what the winning result was along with a short explanatory text for the personality type and a restart button to let the user easily have another go at the game.
 ![Winning personality type](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/restart-button.png)

  ### Pie Section
  
  After the game is over a pie chart is revealed as well.
  The pie chart has a clear breakdown of the personalities that the answers resulted in.
 ![pie chart with results](https://github.com/christiangoran/child-personality-quiz/blob/main/assets/wireframes/pie-chart.png)

- - -
## Testing & Bugs
[See TESTING.md for full breakdown of testing & bugs](testing.md)

- - -
## Deployment

### GitHub Pages

The site was deployed to GitHub pages. The steps to deploy are as follows: 
1. In the GitHub repository, navigate to the Settings tab 
2. From the left hand menu select 'Pages'
3. From the source select Branch: main
4. Click 'Save'
5. A live link will be displayed when published successfully. 

The live link can be found here - [https://christiangoran.github.io/child-personality-quiz/](https://christiangoran.github.io/child-personality-quiz/)

### Forking the GitHub Repository

You can fork the repository by following these steps:
1. Go to the GitHub repository
1. Click on Fork button in upper right hand corner

### Cloning the GitHub Repository

You can clone the repository to use locally by following these steps:
1. Navigate to the GitHub Repository you want to clone
2. Click on the code drop down button
3. Click on HTTPS
4. Copy the repository link to the clipboard
5. Open your IDE of choice (git must be installed for the next steps)
6. Type git clone copied-git-url into the IDE terminal


Errors:


## Credits

- http://Chart.js used for creating the pie chart

- I used https://www.fontpair.com to find a matching font pair for the project.

- I used SuzyBees Terry Pratchet quiz as an inspiration of how things could be done

- I used Emma Hewsons travel personality quiz as inspiration, awe and source of potential ways of solving issues.

- Learning more about loops, arrays, objects, functions and how to call them and use arguments at these sites: 

  - https://w3schools.com
  - https://www.youtube.com/watch?v=riDzcEQbX6k&list=PL5riBBhIsrRSUaNZA2kendinzU5oDxkgG&index=13&t=993s
  - https://www.youtube.com/watch?v=y17RuWkWdn8&list=PL5riBBhIsrRSUaNZA2kendinzU5oDxkgG&index=14&t=240s
  
- Special thanks to my mentor Garreth McGirr for the tips and guidance.

- And thank you to the rest of the team at Code Institute, especially the gurus at tutoring. Save med a lot of time.



