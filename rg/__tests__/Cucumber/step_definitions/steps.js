const { Given, When, Then } = require('@cucumber/cucumber');
const SplashPage = require('../pages/SplashPage'); // Correct path
const InputPage = require('../pages/InputPage');
const MatchupPage = require('../pages/MatchupPage');
const ResultsPage = require('../pages/ResultsPage');

Given('I am on the splash page', async function() {
  await browser.url('http://localhost:3000');
});

When('I enter a topic', async function() {
  await SplashPage.enterTopic('Favorite Fruit');
});

When('I submit the topic', async function() {
  await SplashPage.submit();
});

When('I enter items to compare', async function() {
  await InputPage.enterRow(0, 'Apple');
  await InputPage.addRow();
  await InputPage.enterRow(1, 'Banana');
  await InputPage.addRow();
  await InputPage.enterRow(2, 'Cherry');
});

When('I submit the items', async function() {
  await InputPage.submit();
});

When('I complete the matchups choosing left each time', async function() {
  const matchups = 3; // Adjust this based on the number of matchups
  for (let i = 0; i < matchups; i++) {
    await MatchupPage.chooseLeft();
  }
});

Then('I should see the final scores', async function() {
  const results = await ResultsPage.getResults();
  console.log(results);
});
