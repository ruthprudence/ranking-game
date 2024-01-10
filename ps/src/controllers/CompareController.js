// CompareController.js
import React from 'react';
import { useChoiceManagerModel } from '../models/CompareModel';
import { ComparisonManagerView } from '../views/CompareView';
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