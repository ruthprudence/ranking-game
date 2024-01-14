import { useState, useCallback, useMemo } from 'react';

const useGameLogic = (pairs, items, setItems) => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isComparisonComplete, setIsComparisonComplete] = useState(false);

  const handleChoiceSelection = useCallback((selectedChoice) => {
    const updatedItems = items.map(item => {
      if (item.name === selectedChoice) {
        return { ...item, votes: item.votes + 1 };
      }
      return item;
    });

    setItems(updatedItems);

    if (currentPairIndex < pairs.length - 1) {
      setCurrentPairIndex(currentPairIndex + 1);
    } else {
      setIsComparisonComplete(true);
    }
  }, [currentPairIndex, pairs.length, items, setItems]);

  const currentPair = useMemo(() => pairs[currentPairIndex], [pairs, currentPairIndex]);

  return { currentPair, isComparisonComplete, handleChoiceSelection };
};

export default useGameLogic;
