// useComparisonView.js
import { useCallback } from 'react';

const useComparisonView = (rows, onChoiceSelect) => {
  const handleLeftChoiceSelect = useCallback(() => {
    onChoiceSelect(rows[currentPair[0]]);
  }, [rows, currentPair, onChoiceSelect]);

  const handleRightChoiceSelect = useCallback(() => {
    onChoiceSelect(rows[currentPair[1]]);
  }, [rows, currentPair, onChoiceSelect]);

  return { handleLeftChoiceSelect, handleRightChoiceSelect };
};

export default useComparisonView;
