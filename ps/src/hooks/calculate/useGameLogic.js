import { useState, useCallback, useMemo } from 'react';

const useGameLogic = (pairs, rows, initialState) => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [scores, setScores] = useState({});
  const [isComparisonComplete, setIsComparisonComplete] = useState(false);
  const [model] = useState(initialState);

  const handleChoiceSelection = useCallback((selectedChoice) => {
    setScores(prevScores => ({
      ...prevScores,
      [selectedChoice]: (prevScores[selectedChoice] || 0) + 1
    }));

    if (currentPairIndex < pairs.length - 1) {
      setCurrentPairIndex(currentPairIndex + 1);
    } else {
      setIsComparisonComplete(true);
    }
  }, [currentPairIndex, pairs.length]);

  const currentPair = useMemo(() => pairs[currentPairIndex], [pairs, currentPairIndex]);

  return { model, currentPair, scores, isComparisonComplete, handleChoiceSelection };
};

export default useGameLogic;
