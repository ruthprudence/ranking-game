class ResultsPage {
    get results() { return $$('.result-item'); }
  
    async getResults() {
      return await Promise.all(this.results.map(async result => await result.getText()));
    }
  }
  
  module.exports = new ResultsPage();
  