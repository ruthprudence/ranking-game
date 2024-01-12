// useInputController.js
import { useState, useCallback } from 'react';
import { InputModel, TopicModel, SortingModel } from '../models/InputModel';

const useInputController = (initialValue) => {
  const [model] = useState(new InputModel(initialValue));
  const handleUpdate = useCallback((index, newValue) => {
    model.updateValue(newValue);
  }, [model]);

  return { value: model.getValue(), handleUpdate };
};

// Similarly, create hooks for TopicController and SortingInputController

export default useInputController;
