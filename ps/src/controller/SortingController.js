// SortingController.js
import React, { useState } from 'react';
import SortingModel from '../model/SortingModel';
import SortingInputView from '../view/SortingView';

const SortingInputController = () => {
  const MAXCHOICES = 10; // Example maximum number of choices
  const [model, setModel] = useState(new SortingModel([], MAXCHOICES));

  const addRow = () => {
    model.addRow('New Item'); // Replace with logic for new row
    setModel(new SortingModel([...model.rows], MAXCHOICES));
  };

  const updateRow = (index, updatedRow) => {
    model.updateRow(index, updatedRow);
    setModel(new SortingModel([...model.rows], MAXCHOICES));
  };

  const removeRow = index => {
    model.removeRow(index);
    setModel(new SortingModel([...model.rows], MAXCHOICES));
  };

  const handleSubmit = () => {
    // Handle submit logic
    console.log('Submitted Rows:', model.rows);
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
