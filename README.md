# Ranking Game

## Introduction

[https://rg.ruthprudence.com](https://rg.ruthprudence.com)


This web app is built with JavaScript (**React/Redux**, **Express**, **Jest**)--demonstrating my full-stack development, testing, and project management skills.

Built using VS Code, Postman, MySQL, dev tools (Redux, Node) and Git.

See live demo: [https://rg.ruthprudence.com](https://rg.ruthprudence.com)

---

## Project Overview

The Ranking Game is a React application that features dynamic input fields, real-time updates, and an intuitive interface, making decision-making seamless.

I used React because of the app's single-page nature; I went with Redux for managing state properties throughout. I'm using a component/feature model (upgraded from an MVC pattern) utilizing slices and reducers to handle logic/flow. The latter especially allows the app to scale, and eventually migrate to React Native.

### Technical Stack

- **React/Redux**: For a unified and responsive UI across web and mobile platforms.
- **Express.js**: Backend efficiency in handling API requests.
- **MySQL**: Reliable database management for data integrity.
- **Jest & Puppeteer**: Ensuring application reliability and performance through extensive testing.

### Code Layout

I prioritized deterministic features/components that could be unit tested, and built to scale. For example, The React App calls the RangkingGame file, which controls which page the user sees--this in turn is managed by the gameSlice feature, each part is handling one part of the code/logic.

There are four "pages" a user views:

- **Splash Page**: A landing place for the user, where they can enter a topic. The topic is limited by character length (the user will observe no further text input being entered) and the submit button isn't allowed to be clicked until valid text is in the input box.

- **Input Page**: The input page is where users enter their topics to compare, or rank: they can add rows (until the max limit is reached, which is default set to 12), and rows can be added/subtracted with colorful buttons (green for add, red for subtract). The submit button has a similar validation, where all rows must have valid text before submission, and this page also includes a link in the footer to reset the game and start over: this reset resets all aspects of state, and allows the user a fresh experpience without reloading the page.

- **Matchup Page**: Users compare items they submitted earlier, one match a time--the pairing logic is set (and deterministic) to present a particular order to the user, snaking through their choices (so as to minimize repetition). Upon clicking, the vote is recorded and a small CSS effect alerts the user as to which choice was clicked. This proceeds until all matchups have been completed.

- **Results Page**: After finishing the final matchup, the user is presented with a scorecard of their voting. Items are ranked, and any ties subtract from the next one (for example, if there are two items tied for first-place, the next item will be ranked third-place).

### Key Features

- **Dynamic Input Management**: Leveraging React's state management for dynamic and responsive user input handling.
- **Pairwise Comparison Algorithm**: Innovative method for preference selection, enhancing user engagement.
- **Real-Time Updates**: Utilizing state-of-the-art techniques to ensure a smooth and interactive user experience.
- **Comprehensive Scoring System**: Robust scoring mechanism to provide accurate and meaningful results.
- **Elegant Results Presentation**: User-friendly display of outcomes, making data interpretation straightforward.


### Contribution

Contributions to the Ranking Game project are welcome. Please feel free to fork the repository, make improvements, and submit pull requests.

---

Developed by Ruth Prudence | [GitHub](https://github.com/ruthprudence/ranking-game)
