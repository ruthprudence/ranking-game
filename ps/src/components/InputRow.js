import React from 'react';

const InputRow = ({ index, value, onUpdate, onRemove }) => (
  <div>
    <span>{index + 1}. </span>
    <input
      type='text'
      value={value}
      onChange={(e) => onUpdate(index, e.target.value)}
    />
    <button onClick={() => onRemove(index)}>Remove</button>
  </div>
);

export default InputRow;
