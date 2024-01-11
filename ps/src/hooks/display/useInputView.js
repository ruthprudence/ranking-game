// useInputView.js
import { useState } from 'react';

const useInputView = (initialValue, onRemove, placeholder) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, handleChange, onRemove, placeholder };
};

export default useInputView;
