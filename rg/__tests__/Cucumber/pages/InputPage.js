class InputPage {
    get rows() { return $$('.input-row input'); }
    get addRowButton() { return $('#add-row-button'); }
    get submitButton() { return $('#input-submit-button'); }
  
    async enterRow(index, text) {
      await this.rows[index].setValue(text);
    }
  
    async addRow() {
      await this.addRowButton.click();
    }
  
    async submit() {
      await this.submitButton.click();
    }
  }
  
  module.exports = new InputPage();
  