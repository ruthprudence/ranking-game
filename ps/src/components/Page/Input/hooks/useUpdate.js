// useInputModel.js
import { useState } from 'react';

const useUpdate = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  const getValue = () => value;

  return { getValue, updateValue };
};

export default useUpdate;
