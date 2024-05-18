class SplashPage {
    get topicInput() { return $('#topic-input'); }
    get submitButton() { return $('#submit-button'); }
  
    async enterTopic(topic) {
      await this.topicInput.setValue(topic);
    }
  
    async submit() {
      await this.submitButton.click();
    }
  }
  
  module.exports = new SplashPage();
  