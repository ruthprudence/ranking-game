const { By } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameField = By.name('username');
    this.passwordField = By.name('password');
    this.loginButton = By.name('login');
    this.errorMessage = By.id('error');
  }

  async navigateTo() {
    await this.driver.get('http://example.com/login');
  }

  async enterUsername(username) {
    await this.driver.findElement(this.usernameField).sendKeys(username);
  }

  async enterPassword(password) {
    await this.driver.findElement(this.passwordField).sendKeys(password);
  }

  async clickLogin() {
    await this.driver.findElement(this.loginButton).click();
  }

  async getErrorMessage() {
    return await this.driver.findElement(this.errorMessage).getText();
  }
}

module.exports = LoginPage;
