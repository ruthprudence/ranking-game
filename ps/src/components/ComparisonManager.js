import React from 'react';

const ComparisonManager = ({ currentPair, rows, onChoiceSelect }) => {
  if (!currentPair) return null;

  return (
    <div>
      <button onClick={() => onChoiceSelect(rows[currentPair[0]])}>
        {rows[currentPair[0]]}
      </button>
      <button onClick={() => onChoiceSelect(rows[currentPair[1]])}>
        {rows[currentPair[1]]}
      </button>
    </div>
  );
};

export default ComparisonManager;
