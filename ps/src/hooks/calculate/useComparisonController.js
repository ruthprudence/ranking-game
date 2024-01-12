// useComparisonController.js
import { useState, useCallback } from 'react';
import { useChoiceManagerModel } from '../models/ComparisonModel';

const useComparisonController = (pairs, rows) => {
  const { currentPair, scores, isComparisonComplete, handleChoiceSelection } = useChoiceManagerModel(pairs);
  
  const onChoiceSelect = useCallback((choice) => {
    handleChoiceSelection(choice);
  }, [handleChoiceSelection]);

  return { currentPair, scores, isComparisonComplete, onChoiceSelect, rows };
};

export default useComparisonController;
