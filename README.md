# Let's Go Boating

<img width="500" alt="river trip thumbnails" src="https://user-images.githubusercontent.com/96206823/173251180-485bae3b-1e78-4066-a316-42768a28d2ae.png">

## Table of Contents

  - [Introduction](#introduction)
  - [Learning Goals](#learning-goals)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Page Demo](#page-demo)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)
  - [Additional Resources](#additional-resources)

## Introduction
Assigned as a final project in Turing's Front End Engineering Module 3, students were given free reign to make a project of their choice. I chose to make a rafting and kayaking 'trip finder' to help boaters plan their next adventure.

The project spec can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).

Personally, my biggest win was getting to work with a data set that I was so excited about. I feel that building out the API and its endpoints also gave me a deeper understanding of restful API behavior.

My biggest challenge while completing the project was the strict timeframe. There are many extensions that I would love to add, but unfortunately they weren't possible in the few days I had to complete the api and application.

## Learning Goals
  - Utilize modern React, including use of hooks and functional components.
  - Incorporate React Router.
  - Create a mini backend using Express.
  - Implement end-to-end testing (including the interception of API calls) with Cypress.

## Technologies
  - React/React Router
  - Javascript
  - JSX/HTML
  - CSS
  - Cypress
  - Express/Restful APIs
  - Webpack
  - NPM

## Features
- On page load, a user is presented with a collection of river trip thumbnails and a thumbnail filtering form. The form can be used to narrow down the trip search by month and whether or not a lottery permit is required.
- Once a user sees an interesting trip, they can click on its thumbnail. If they want to add the trip to their bucket list, they can do so from the trip's details page.
- From here, a user can go **Home** or view their saved **Bucket List**.

## Page Demo
Filtering trips:

![Filtering Trips](https://media.giphy.com/media/pCXTztYYo1yhaYWlDR/giphy.gif)

Viewing a trip's details and adding to Bucket List:

![Viewing Trip Details](https://media.giphy.com/media/CJQ84FijIbnLqAto6p/giphy.gif)


## Possible Future Extensions
- I would love to add more inputs to the form, allowing a user to filter their search by other factors.
- I also plan to deploy the API in the future so that the user doesn't have to run it on their local machine while using the application.

## Set Up
1. Clone the [backend](https://github.com/whiteheadol/river-api) repo to your local machine.
2. `cd` into this backend directory.
3. Run `npm start` to run the API on your local server. This will need to run the entire time you use the application.
4. Visit [this](https://lets-go-boating.herokuapp.com/) deploy link to use the actual application.
5. Enjoy exploring the different river trips!

## Contributors
- Olivia Whitehead (GitHub: whiteheadol)

## Project Specs
- The spec for this project can be found [here]().

- The backend API can be found [here]().

## Additional Resources
- [Wireframe](https://excalidraw.com/#json=Xdu1BmB-g_SkYY-xZh9e-,rYzfPIXXR0-mbcpirTLRlQ)
- [Project Board](https://github.com/whiteheadol/lets-go-boating/projects/1)
- All photo credit can be found in the API dataset.
