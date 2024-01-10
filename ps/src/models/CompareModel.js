// CompareModel.js
import { useState } from 'react';

export const useChoiceManagerModel = (pairs) => {
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

  const currentPair = pairs[currentPairIndex];

  return { currentPair, scores, isComparisonComplete, handleChoiceSelection };
};