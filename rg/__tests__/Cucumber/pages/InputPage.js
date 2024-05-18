class InputPage {
    constructor() {
      this.rows = element.all(by.css('.input-row'));
      this.addRowButton = element(by.id('add-row-button'));
      this.submitButton = element(by.id('input-submit-button'));
    }
  
    async enterRow(index, text) {
      const row = this.rows.get(index).element(by.css('input'));
      await row.sendKeys(text);
    }
  
    async addRow() {
      await this.addRowButton.click();
    }
  
    async submit() {
      await this.submitButton.click();
    }
  }
  
  module.exports = new InputPage();
  