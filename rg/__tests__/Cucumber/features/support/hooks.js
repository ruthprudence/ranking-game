const { Before, After } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');

Before(async function () {
  this.driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  await this.driver.quit();
});
