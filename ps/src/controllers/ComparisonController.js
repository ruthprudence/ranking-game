// CompareController.js
import React from 'react';
import { useChoiceManagerModel } from '../models/ComparisonModel';
import { ComparisonManagerView } from '../views/ComparisonView';
import DisplayRankings from './DisplayController';

export const ChoiceManagerController = ({ pairs, rows }) => {
  const { currentPair, scores, isComparisonComplete, handleChoiceSelection } = useChoiceManagerModel(pairs);

  if (isComparisonComplete) {
    return <DisplayRankings scores={scores} />;
  }

  return (
    <ComparisonManagerView
      currentPair={currentPair}
      rows={rows}
      onChoiceSelect={handleChoiceSelection} />
  );
};