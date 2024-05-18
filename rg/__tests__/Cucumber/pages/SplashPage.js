class SplashPage {
    constructor() {
      this.topicInput = element(by.id('topic-input'));
      this.submitButton = element(by.id('submit-button'));
    }
  
    async enterTopic(topic) {
      await this.topicInput.sendKeys(topic);
    }
  
    async submit() {
      await this.submitButton.click();
    }
  }
  
  module.exports = new SplashPage();
  