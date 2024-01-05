import React, { useState } from 'react';

const ChoiceManager = ({ pairs, rows }) => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isComparisonComplete, setIsComparisonComplete] = useState(false);
  const [scores, setScores] = useState({});

  const handleChoiceSelection = (selectedChoice) => {
    setScores(prevScores => ({
      ...prevScores,
      [selectedChoice]: (prevScores[selectedChoice] || 0) + 1
    }));

    if (currentPairIndex < pairs.length - 1) {
      setCurrentPairIndex(currentPairIndex + 1);
    } else {
      setIsComparisonComplete(true);
    }
  };

  if (isComparisonComplete) {
    // Display the final score or sorted choices here
    return <div>Comparison Complete! {/* Display results */}</div>;
  }

  const currentPair = pairs[currentPairIndex];
  if (!currentPair) return null; // In case pairs are empty

  return (
    <div>
      <div onClick={() => handleChoiceSelection(rows[currentPair[0]])}>
        {rows[currentPair[0]]} {/* Choice on the Left */}
      </div>
      <div onClick={() => handleChoiceSelection(rows[currentPair[1]])}>
        {rows[currentPair[1]]} {/* Choice on the Right */}
      </div>
    </div>
  );
};

export default ChoiceManager;
