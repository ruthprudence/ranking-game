// InputModel.js

class InputModel {
  constructor(value) {
    this.value = value;
  }

  updateValue(newValue) {
    this.value = newValue;
  }

  getValue() {
    return this.value;
  }
}

class TopicModel {
  constructor() {
    this.topic = '';
  }

  setTopic(newTopic) {
    this.topic = newTopic;
  }

  getTopic() {
    return this.topic;
  }

  isTopicValid() {
    return this.topic.trim().length > 0;
  }
}

class SortingModel {
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

export { InputModel, TopicModel, SortingModel };
