import React from 'react';
import InputRow from './InputRow';

const SortingInput = ({ rows, addRow, updateRow, removeRow, handleSubmit, MAXCHOICES }) => {
  return (
    <>
      {rows.map((row, index) => (
        <InputRow
          key={index}
          index={index}
          value={row}
          onUpdate={updateRow}
          onRemove={removeRow}
          placeholder={index === 0 ? 'apples' : index === 1 ? 'berries' : index === 2 ? 'cherries' : 'Enter your item'}
        />
      ))}
      {rows.length < MAXCHOICES && (
        <button onClick={addRow}>Add</button>
      )}
      {rows.length >= MAXCHOICES && (
        <p>You have reached the maximum number of items.</p>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default SortingInput;
