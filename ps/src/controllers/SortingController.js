import React, { useState } from 'react'; // Add the import statement for useState
import SortingModel from '../models/SortingModel';
import SortingInputView from '../views/SortingView';
import { MAXCHOICES } from '../utils/constants';

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

export default SortingInputController;
