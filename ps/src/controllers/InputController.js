import React, { useState } from 'react';
import InputModel from '../models/InputModel';
import InputView from '../views/InputView';

const InputController = ({ index, initialValue, onRemove, placeholder }) => {
  const [model] = useState(new InputModel(initialValue));

  const handleUpdate = (index, newValue) => {
    model.updateValue(newValue);
    // Here you could add additional logic if needed
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

export default InputController;
