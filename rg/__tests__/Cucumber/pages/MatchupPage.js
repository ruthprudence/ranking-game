class MatchupPage {
    constructor() {
      this.leftButton = element(by.id('left-button'));
      this.rightButton = element(by.id('right-button'));
    }
  
    async chooseLeft() {
      await this.leftButton.click();
    }
  
    async chooseRight() {
      await this.rightButton.click();
    }
  }
  
  module.exports = new MatchupPage();
  