class MatchupPage {
    get leftButton() { return $('#left-button'); }
    get rightButton() { return $('#right-button'); }
  
    async chooseLeft() {
      await this.leftButton.click();
    }
  
    async chooseRight() {
      await this.rightButton.click();
    }
  }
  
  module.exports = new MatchupPage();
  