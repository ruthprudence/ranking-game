// SortingView.js
import React from 'react';
import InputController from '../controllers/InputController';

const SortingInputView = ({ rows, onAddRow, onUpdateRow, onRemoveRow, onSubmit, maxChoices }) => (
  <>
    {rows.map((row, index) => (
      <div key={index}>
        <InputController
          index={index}
          value={row}
          onUpdate={value => onUpdateRow(index, value)}
          onRemove={() => onRemoveRow(index)}
          className='choice'
          placeholder={index === 0 ? 'apples' : index === 1 ? 'bananas' : index === 2 ? 'cranberries' : 'Enter your item'}
        />
      </div>
    ))}
    {rows.length < maxChoices && <button onClick={onAddRow}>Add</button>}
    {rows.length >= maxChoices && <p>You have reached the maximum number of items.</p>}
    <button onClick={onSubmit}>Submit</button>
  </>
);

export default SortingInputView;
