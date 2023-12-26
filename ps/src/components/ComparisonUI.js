import React from 'react';

const ComparisonUI = ({ pair, onChoiceSelection, choices }) => (
  <div>
    <button onClick={() => onChoiceSelection(choices[pair[0]])}>
      {choices[pair[0]]}
    </button>
    <button onClick={() => onChoiceSelection(choices[pair[1]])}>
      {choices[pair[1]]}
    </button>
  </div>
);

export default ComparisonUI;
