import React, { useState } from 'react';
import { handleChoices } from '../controller/PriorityController';

const PrioritySorter = () => {
  const [input, setInput] = useState('');
  const [priorities, setPriorities] = useState([]);
  const [choices, setChoices] = useState([]);
  const [sortedPriorities, setSortedPriorities] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddPriority = () => {
    setPriorities([...priorities, input]);
    setInput('');
  };

  const handleSubmit = () => {
    // Present the captured priorities as choices
    setChoices(priorities);
  };

  const handleChoiceSelection = (choice) => {
    // Call the controller's handleChoices function to get the sorted priorities
    const sorted = handleChoices(choices);
    setSortedPriorities(sorted);
  };

  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange} />
      <button onClick={handleAddPriority}>Add Priority</button>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoiceSelection(choice)}>{choice}</button>
        ))}
      </div>
      <div>
        {sortedPriorities.map((priority, index) => (
          <p key={index}>{priority}</p>
        ))}
      </div>
    </div>
  );
};

export default PrioritySorter;
