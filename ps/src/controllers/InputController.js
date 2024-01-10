// InputController.js
import React, { useState } from 'react';
import { InputModel, TopicModel, SortingModel } from '../models/InputModel';
import { InputView, TopicView, SortingInputView } from '../views/InputView';
import { MAXCHOICES } from '../utils/constants';

const InputController = ({ index, initialValue, onRemove, placeholder }) => {
  const [model] = useState(new InputModel(initialValue));

  const handleUpdate = (index, newValue) => {
    model.updateValue(newValue);
  };

  return (
    <InputView
      index={index}
      value={model.getValue()}
      onValueChange={handleUpdate}
      onRemove={onRemove}
      placeholder={placeholder}
    />
  );
};

const TopicController = ({ onSubmitTopic }) => {
  const [model] = useState(new TopicModel());
  const [topic, setTopic] = useState('');

  const handleTopicChange = (newTopic) => {
    setTopic(newTopic);
    model.setTopic(newTopic);
  };

  const handleSubmit = () => {
    if (!model.isTopicValid()) {
      alert("Please enter a topic before submitting.");
      return;
    }
    onSubmitTopic(model.getTopic());
  };

  return (
    <TopicView 
      topic={model.getTopic()} 
      onTopicChange={handleTopicChange} 
      onSubmitTopic={handleSubmit} 
    />
  );
};

const SortingInputController = ({ onSubmit }) => {
  const [model, setModel] = useState(new SortingModel(['', '', ''], MAXCHOICES));

  const addRow = () => {
    model.addRow('New Item');
    setModel(new SortingModel([...model.rows], MAXCHOICES));
  };

  const updateRow = (index, updatedValue) => {
    model.updateRow(index, updatedValue);
    setModel(new SortingModel([...model.rows], MAXCHOICES));
  };

  const removeRow = index => {
    model.removeRow(index);
    setModel(new SortingModel([...model.rows], MAXCHOICES));
  };

  const handleSubmit = () => {
    onSubmit(model.rows);
  };

  return (
    <SortingInputView
      rows={model.rows}
      onAddRow={addRow}
      onUpdateRow={updateRow}
      onRemoveRow={removeRow}
      onSubmit={handleSubmit}
      maxChoices={MAXCHOICES}
    />
  );
};

export { InputController, TopicController, SortingInputController };
