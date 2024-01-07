import React from 'react';
import InputRow from './ui/InputRow';

const SortingInput = ({ rows, addRow, updateRow, removeRow, handleSubmit, MAXCHOICES }) => {
  return (
    <>
      {rows.map((row, index) => (
        <div key={index}>
          <InputRow
            index={index}
            value={row}
            onUpdate={updateRow}
            onRemove={removeRow}
            class='choice'
            placeholder={index === 0 ? 'apples' : index === 1 ? 'bananas' : index === 2 ? 'cranberries' : 'Enter your item'}
          />
        </div>
      ))}
      {rows.length < MAXCHOICES && <button name="addRow" onClick={addRow}>Add</button>}
      {rows.length >= MAXCHOICES && <p>You have reached the maximum number of items.</p>}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default SortingInput;
