// InputView.js
import React from 'react';
import InputController from '../controllers/InputController';

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

const TopicView = ({ topic, onTopicChange, onSubmitTopic }) => (
  <div>
    <h1>Ranking Game</h1>
    <div>
      <input
        type="text"
        placeholder="e.g. fruits"
        value={topic}
        onChange={(e) => onTopicChange(e.target.value)}
      />
    </div>
    <div>
      <button onClick={onSubmitTopic}>Submit Topic</button>
    </div>
  </div>
);

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
          placeholder={index === 0 ? 'e.g. apples' : index === 1 ? 'e.g. bananas' : index === 2 ? 'e.g. cranberries' : 'Enter your item'}
        />
      </div>
    ))}
    {rows.length < maxChoices && <button onClick={onAddRow}>Add</button>}
    {rows.length >= maxChoices && <p>You have reached the maximum number of items.</p>}
    <button onClick={onSubmit}>Submit</button>
  </>
);

export { InputView, TopicView, SortingInputView };
