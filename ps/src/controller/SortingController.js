import React, { useState } from 'react';
import SortingModel from '../model/SortingModel';
import SortingInputView from '../view/SortingView';
import { MAXCHOICES } from '../utils/constants';

const SortingInputController = ({ onSubmit }) => {
  const [model, setModel] = useState(new SortingModel(['', '', ''], MAXCHOICES));

  const addRow = () => {
    model.addRow('New Item');
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
