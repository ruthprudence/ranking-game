const { Given, When, Then } = require('@cucumber/cucumber');
const splashPage = require('../../pages/SplashPage');
const inputPage = require('../../pages/InputPage');
const matchupPage = require('../../pages/MatchupPage');
const resultsPage = require('../../pages/ResultsPage');

Given('I am on the splash page', async function() {
  await browser.get('http://localhost:3000');
});

When('I enter a topic', async function() {
  await splashPage.enterTopic('Favorite Fruit');
});

When('I submit the topic', async function() {
  await splashPage.submit();
});

When('I enter items to compare', async function() {
  await inputPage.enterRow(0, 'Apple');
  await inputPage.addRow();
  await inputPage.enterRow(1, 'Banana');
  await inputPage.addRow();
  await inputPage.enterRow(2, 'Cherry');
});

When('I submit the items', async function() {
  await inputPage.submit();
});

When('I complete the matchups choosing left each time', async function() {
  const matchups = 3; // Adjust this based on the number of matchups
  for (let i = 0; i < matchups; i++) {
    await matchupPage.chooseLeft();
  }
});

Then('I should see the final scores', async function() {
  const results = await resultsPage.getResults();
  console.log(results);
});
