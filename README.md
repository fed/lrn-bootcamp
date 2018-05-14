# Learnosity Bootcamp Project

![Learnosity Bootcamp Project](https://i.imgur.com/3HOlChh.png)

## Prerequisites

* Node.js (https://nodejs.org/)
* Yarn (https://yarnpkg.com/)
* Composer (https://getcomposer.org/)

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install && composer install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start` | Run the app in development mode with live reload on `http://localhost:6789` |
| `yarn build` | Generate an optimised, production-ready application bundle |

# About

This project is an attempt at adding some level of gamification to Learnosity's Items API.

On this game, Mario has to answer all questions correctly in order to keep moving through the platforms and reach Princess Peach (who's randomly flying on her drones on the upper-right corner), before the burning lava flowing up the screen catches and sets him on fire.

Mario starts out with three lives and no points. Every time a wrong answer is provided, Mario will lose one life. Game is over after losing the third life.

## Implementation Details

The main goal behind this project is to demonstrate we can use as much or as little as we want from any of Learnosity's products, benefit from the things we need the most and build a totally custom yet solid software solution on top of that.

Questions were created using our [Author Site](https://author.staging.learnosity.com).

Each item has been graded upon creation on Author Site, and this score is what we use to calculate the points earned throughout the game as Mario progresses on his escape from the burning lava.

The game instantiates our [Items API](https://docs.learnosity.com/assessment/items) in "inline" mode, that is, without including the Assess Player (i.e. [Assess API](https://docs.learnosity.com/assessment/assess)).

Since we are not using Assess API, all of the game state (score, lives left, level, etc.) is handled internally and independently from any API.

At the end of the game the user is prompted with a report of how they did overall: points earned, questions attempted and incorrect answers. These stats are also calculated manually without the aid of Reports API. This is because the answers are never submitted to the server, rather handled locally.

One thing to note is that questions are generated dynamically based on the viewport width. There's a bank of 10 questions created on Author Site and being used into the page, meaning there will be at most 10 platforms or tiles on which Mario can jump to get to the Princess. But when playing from an iPad, for instance, only four tiles will be rendered instead of all ten, and the game will finish once the user has answered all four questions correctly.

At a code level, it's basically plain old HTML (see: `/index.php`), CSS (no libraries nor pre/post-processors, just hand crafted vanilla CSS, see: `/src/style.css`) and Vanilla JavaScript (using ES modules bundled with the help of Rollup and ES6+ syntax and features, see: `/src/index.js`).

*Side note: CSS rules are not post-processed using Autoprefixer and JS files are not transpiled using Babel, but should definitely be. This is just a PoC and works fine on Chrome latest (as of the time of this writing, v66).*
