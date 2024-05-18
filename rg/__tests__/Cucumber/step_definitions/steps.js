const { Given, When, Then } = require('@cucumber/cucumber');
const splashPage = require('../pages/SplashPage');
const inputPage = require('../pages/InputPage');
const matchupPage = require('../pages/MatchupPage');
const resultsPage = require('../pages/ResultsPage');

Given('I am on the splash page', async function() {
  await browser.url('http://localhost:3000');
  await browser.pause(3000);  // Pause for 3 seconds to inspect
});

When('I enter a topic', async function() {
  await splashPage.enterTopic('Favorite Fruit');
  await browser.pause(1000);
});

When('I submit the topic', async function() {
  await splashPage.submit();
  await browser.pause(1000);
});

When('I enter items to compare', async function() {
  await inputPage.enterRow(0, 'Apple');
  await inputPage.addRow();
  await inputPage.enterRow(1, 'Banana');
  await inputPage.addRow();
  await inputPage.enterRow(2, 'Cherry');
  await browser.pause(1000);
});

When('I submit the items', async function() {
  await inputPage.submit();
  await browser.pause(1000);
});

When('I complete the matchups choosing left each time', async function() {
  const matchups = 3;
  for (let i = 0; i < matchups; i++) {
    await matchupPage.chooseLeft();
    await browser.pause(1000);
  }
});

Then('I should see the final scores', async function() {
  const results = await resultsPage.getResults();
  console.log(results);
  await browser.pause(3000);  // Pause for 3 seconds to inspect
});
