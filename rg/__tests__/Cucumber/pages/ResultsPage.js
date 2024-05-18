class ResultsPage {
    constructor() {
      this.results = element.all(by.css('.result-item'));
    }
  
    async getResults() {
      return this.results.getText();
    }
  }
  
  module.exports = new ResultsPage();
  