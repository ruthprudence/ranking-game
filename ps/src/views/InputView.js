import React from 'react';

const InputView = ({ index, value, onValueChange, onRemove, placeholder }) => (
  <div>
    <span>{index + 1}. </span>
    <input
      type='text'
      value={value}
      onChange={(e) => onValueChange(index, e.target.value)}
      placeholder={placeholder}
    />
    <button onClick={() => onRemove(index)}>Remove</button>
  </div>
);

export default InputView;
