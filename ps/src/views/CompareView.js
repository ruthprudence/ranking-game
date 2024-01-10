// CompareView.js
import React from 'react';

export const ComparisonManagerView = ({ currentPair, rows, onChoiceSelect }) => {
  if (!currentPair) return null;

  return (
    <div>
      <button className="left" onClick={() => onChoiceSelect(rows[currentPair[0]])}>
        {rows[currentPair[0]]}
      </button>
      <button className="right" onClick={() => onChoiceSelect(rows[currentPair[1]])}>
        {rows[currentPair[1]]}
      </button>
    </div>
  );
};