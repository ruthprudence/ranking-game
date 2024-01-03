import React from 'react';
import ComparisonUI from './ComparisonUI';
import ResultsTable from './ResultsTable';

const SortingProcess = ({ isSubmitted, currentPair, handleChoiceSelection, choices, isComparisonComplete, sortedChoices, scores }) => {
  return (
    <>
      {isSubmitted && currentPair[0] < choices.length - 1 && (
        <ComparisonUI
          pair={currentPair}
          onChoiceSelection={handleChoiceSelection}
          choices={choices}
        />
      )}
      {isComparisonComplete && <ResultsTable sortedChoices={sortedChoices} scores={scores} />}
    </>
  );
};

export default SortingProcess;
