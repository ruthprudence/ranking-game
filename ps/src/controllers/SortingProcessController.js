// SortingProcessController.js
import React, { useState } from 'react';
import SortingProcessModel from '../models/SortingProcessModel';
import SortingProcessView from '..views//SortingProcessView';

const SortingProcessController = ({ isSubmitted, currentPair, handleChoiceSelection, choices, isComparisonComplete, sortedChoices, scores }) => {
  const [model] = useState(new SortingProcessModel());
  // State and state-updating functions go here

  return (
    <SortingProcessView
      isSubmitted={isSubmitted}
      currentPair={currentPair}
      handleChoiceSelection={handleChoiceSelection}
      choices={choices}
      isComparisonComplete={isComparisonComplete}
      sortedChoices={sortedChoices}
      scores={scores}
    />
  );
};

export default SortingProcessController;