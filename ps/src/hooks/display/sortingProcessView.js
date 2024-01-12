// useSortingProcessView.js
import { useCallback } from 'react';

const useSortingProcessView = (choices, handleChoiceSelection, isComparisonComplete) => {
  const handleChoice = useCallback((choice) => {
    handleChoiceSelection(choice);
  }, [handleChoiceSelection]);

  return { handleChoice };
};

export default useSortingProcessView;
