// SortingModel.js
export default class SortingModel {
    constructor(initialRows, maxChoices) {
      this.rows = initialRows;
      this.MAXCHOICES = maxChoices;
    }
  
    addRow(newRow) {
      if (this.rows.length < this.MAXCHOICES) {
        this.rows = [...this.rows, newRow];
      }
    }
  
    updateRow(index, updatedRow) {
      if (index >= 0 && index < this.rows.length) {
        this.rows = this.rows.map((row, i) => (i === index ? updatedRow : row));
      }
    }
  
    removeRow(index) {
      if (index >= 0 && index < this.rows.length) {
        this.rows = this.rows.filter((_, i) => i !== index);
      }
    }
  }
  