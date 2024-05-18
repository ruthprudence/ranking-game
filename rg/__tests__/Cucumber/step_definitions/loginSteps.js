const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, until } = require('selenium-webdriver');
const assert = require('assert');
const LoginPage = require('../../pages/loginPage');

let driver;
let loginPage;

Given('the user is on the login page', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  loginPage = new LoginPage(driver);
  await loginPage.navigateTo();
});

When('the user enters valid credentials', async function () {
  await loginPage.enterUsername('validUsername');
  await loginPage.enterPassword('validPassword');
});

When('the user enters invalid credentials', async function () {
  await loginPage.enterUsername('invalidUsername');
  await loginPage.enterPassword('invalidPassword');
});

When('the user clicks the login button', async function () {
  await loginPage.clickLogin();
});

Then('the user should be redirected to the dashboard', async function () {
  await driver.wait(until.urlIs('http://example.com/dashboard'), 5000);
  const url = await driver.getCurrentUrl();
  assert.strictEqual(url, 'http://example.com/dashboard');
  await driver.quit();
});

Then('an error message should be displayed', async function () {
  const errorMessage = await loginPage.getErrorMessage();
  assert.strictEqual(errorMessage, 'Invalid credentials');
  await driver.quit();
});
