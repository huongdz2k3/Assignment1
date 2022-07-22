# Assignment 1

In this assignment, you will create a RESTful API to support the ability to save and retrieve a list of favorite games by each of the registered users. All registered users in the system should have the ability to save any game as their favorite game, retrieve all their favorite games and remove one or all their favorite games.

## Overview

At the end of this assignment, your should have completed the following:

- Allowed users to select a game as their favorite, and add it to the list of games that are saved on the server.
- Allowed users to retrieve the list of their favorite games from the server.
- Delete one or all of their favorite games from their favorites list on the server.

## Requirements

Your API must expose endpoints that allow users to do the following:

- Add a list of games to their favorites
- Retrieve all their favorite games
- Delete the list of their favorites
- Add a game to their list of favorite games
- Edit the information of a game that is already in the list
- Delete a specific game from the list of their favorite games

## Task breakdown

This assignment consists of the following tasks:

### Task 1

In this task you will be implementing a Mongoose schema named `favoriteSchema`, and a model named Favorites. This schema should take advantage of the Mongoose population support to populate the information about the user and the list of games when the user does a GET operation.

> Read more about Mongoose: http://mongoosejs.com/

> See a sample database in `resources/db.json`

### Task 2

In this task, you will be designing all the API, along with their necessary parameters & query string support, that allow an user to successfully perform the actions listed above. i.e:

- When the user does a GET operation, you will return user's list of favorite games, as long as the details of each game.
- When the user does a POST operation, you will either:

  - Create a favorite document if such a document corresponding to this user does not already exist in the system
  - Add a game specified in the request to the user's list of favorite games, if the game does not already exist in the list of favorites

- When the user does a DELETE operation, you will either:

  - Delete the list of favorites games corresponding to the user
  - Remove the specified game from user's list of favorite games

### Task 3

In this task, you will be designing JSON schema to make sure request/response is of correct form before being processed by the backend. These JSON schemas should:

- Accomodate the Mongoose object models designed in [Task 1](#task-1)
- Be as strict as possible. You have to determine what properties should be required,
what format should be enforce on properties, is it allowed to have additional properties in the payload, etc

> Read more about JSON schema: https://spacetelescope.github.io/understanding-json-schema/

> Use `ajv` to validate an object against JSON schemas: https://github.com/epoberezkin/ajv

### Task 4

In this task, you will be setting up linting rules for this project using [ESLint](https://eslint.org/). The lint config must at least satisfy the following:

- Recognize `ES2015` syntax
- Support `node`, `jest`, `mocha`, `mongo` environment
- Use [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) as the main source of rules
- Do __NOT__ disable or modify any rules.

### Task 5

In this task, you will be writing tests for your API. The tests here consist of:

- Unit test: You can use either [Jest](https://facebook.github.io/jest/) or [Mocha](https://mochajs.org/). Coverage should be *at least 80%*
- Integration test: You can use either [Postman](https://www.getpostman.com/) or [Cucumber](https://github.com/cucumber/cucumber-js)

### Task 6

In this task, you will be implementing the API using Express. You can use whatever middlewares you need to achieve the end goal of this assignment. However, you are recommended to implement from scratch as much as possible.

> See more about Express: https://expressjs.com/

> A partial list of Express middleware: https://expressjs.com/en/resources/middleware.html

## Acceptance criteria

- A Mongoose schema and object model has been correctly implemented to take advantage of Mongoose Population support to track the users and the list of favorite games using their ID
- All API operations are well supported as per the specifications above
- Unit tests/integration tests/lint must pass