# Folks of Star Wars

## Table of Contents
 * [Overview](#Overview)
 * [Installation](#Installation)
 * [Images](#Images)
 * [Questions](#Questions)
 * [Reflections](#Reflections)
 * [Technologies](#Technologies)

## Overview
This application utilizes the swapi API, which is an API that stores loads of information on all things Star Wars.  I was tasked with making an easy-to-use application that displays a list of Star Wars characters and some of their related information including their height, weight, mass, species, homeworld and film appearances.  As well, the user is able to search for a specific character by their character name.  There is also a feature to scroll through several different pages of characters. 

## Installation

1. Clone down this [repo](https://github.com/errabun/Pushpay_challenge)
2. CD into project directory
3. Run npm i to install all project dependencies
4. Run npm start to begin the server
5. Application should be shown in separate window (http://localhost:3000/) once npm start is complete

## Questions

### What design patterns did you use?
 - I utilized a grid structure to display each of the characters in individual 'person cards' that housed all the information for each particular character.  I attempted to keep each card relatively small as each most pieces of information require a separate api request.  As well, I utilized media queries for smaller screens (tablets & mobile devices) to make the grid and search functionality responsive for easy use on all different types devices. I used conditional rendering in most components to display information based on pieces of state that were being stored in the application. 
### How would you test your application? (Testing still in progress...)
 - I am hoping to build testing to ensure that each component renders correctly, including the display of different pieces of information for each character.  As well, tests to verify the search functions correctly based on a search input by the user. 
### How do you manage/store application state?
 - The goal for any project is to keep state easy to manage and update.  To accomplish this in the application I kept only a few inputs in state including the list of people to be displayed, the search results, the current page being viewed and some error handling message to be displayed upon a search that did not return any results.  Each piece of state can be easily manipulated. By utilizing a react-bootstrap accordion menu to display the film appearances for each character, I was able to display just some of the facts for each character and limit the number of API requests & loading time for the entire application. 
### What ways could you structure the code to make it easy to understand and maintain?
 - I attempted to keep the code easy to understand and maintain by using proper naming conventions, creating separate and reuseable components, and grouping functions that were only relavent to each component.  Trying to follow the best practices that I've learned to the best of my knowledge.  Keeping a modular file structure and separating css files into each component folder for easy understanding.  
### What other considerations and tradeoffs did you make when building the application?
 - There were several considerations to take into account during the building of this application including limited the number of requests, only displaying specific information for each character, and utilizing the api search functionality that is provided.  The api is setup so that most of the pieces of information for each character require a separate fetch request, so I tried to consider how to make the app as fast and efficient as possible by limited the information for each character.  Given the short amount of time to complete the application, it would have been nice to have more time to make the search functionality more robust (to search for species, starships, film appearances, etc) instead of just being able to search by character name.  As well, I would have liked to add more testing and styling to make the user interface more pleasant and bug free. 
### How are you describing and typing API data?
 - I did my best to keep the api data as minimal as possible.  Swapi has so much information for each character including very specific information for each 'fact', so limiting the number of requests was essential.  As well, I did my best to use proper naming conventions for future development and developer empathy.  

## Reflections

 - Being a big Star Wars fan, this application was a fun one to build out and test my knowledge of different characters.  In all applications I try my best to learn something new or utilize a new library to further my knowledge.  I used react-bootstrap for the first time in this application with the built in Accordion component to display film appearances for each character.  Bootstrap is an awesome library that I will continue to explore and utilize in future projects.  
 - I am relatively new to using Typescript, so being able to play around in the React (which I am very comfortable with using vanilla JS) while implementing TS was a great learning experience.  There are so many wonderful type guards and features built into TS that really helped catching bugs before I could get them in the application.  
 - I enjoy trying to think about how I could potentially help a user while using any application that I build, so there are several different features like listing the current page number, the clear seach button and allowing a user to return to previous pages while navigating the application.  As well, having several different media queries so a user would be able to access the application and use easily on all different types of devices.  
 - Utilizing a new api always comes with a good learning curve.  I began thinking about the search functionality and thought I would need to pull in all the characters and store in state before filtering through those characters.  It was great to study the api documentation at length to learn that there was a search api request that could be easily implemented.  
 - I've only written tests using Cypress in React in the past, so I am going to be sure to try to utilize Jest testing in this application to help further my learning and experience with mulitple different testing platforms.  While building the application, I try to do my best to use conditional rendering, checks on api promises and other methods to ensure the information that is to be displayed or used will work properly.  
 - Thank you for taking the time to review what I have accomplished and I look forward to receiving some critiques on what could have been done better and learning from other developers on how they would approach a similar set of problems.

## Author
<table>
    <tr>
        <td> Eric Rabun <a href="https://github.com/errabun">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/73191225?v=4" alt="E. Rabun" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies

<table>
    <tr>
        <td>Framework</td>
        <td>Functionality</td>
        <td>Structure</td>
        <td>Styling</td>
    </tr>
    </tr>
        <td><img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="react" width="100" height="auto" /></td>
        <td><img src="https://www.software-architects.com/content/images/blog/2016/12/typescript-logo.png" alt="typescript" width="100" height="auto" /></td>
        <td><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="html" width="100" height="auto" /></td>
        <td><img src="https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="css" width="100" height="auto" /></td>
        <td><img src="https://pluspng.com/img-png/bootstrap-png-bootstrap-512.png" alt="bootstrap" width="100" height="auto" /></td>
    </tr>
</table>
