import React, { useState } from 'react';
import ComparisonManager from './ComparisonManager';
import RankingsDisplay from './RankingsDisplay';

const ChoiceManager = ({ pairs, rows }) => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [scores, setScores] = useState({});
  const [isComparisonComplete, setIsComparisonComplete] = useState(false);

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
    return <RankingsDisplay scores={scores} />;
  }

  const currentPair = pairs[currentPairIndex];

  return (
    <ComparisonManager
      currentPair={currentPair}
      rows={rows}
      onChoiceSelect={handleChoiceSelection}
    />
  );
};

export default ChoiceManager;