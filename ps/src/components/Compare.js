import React, { useState } from 'react';
// import RankingsDisplay from './RankingsDisplay';
import DisplayRankings from './DisplayRanking';

// Combined ComparisonManager component
const ComparisonManager = ({ currentPair, rows, onChoiceSelect }) => {
  if (!currentPair) return null;

  return (
    <div>
      <button className="left" onClick={() => onChoiceSelect(rows[currentPair[0]])}>
        {rows[currentPair[0]]}
      </button>
      <button className="right" onClick={() => onChoiceSelect(rows[currentPair[1]])}>
        {rows[currentPair[1]]}
      </button>
    </div>
  );
};

// Combined ChoiceManager component
const ChoiceManager = ({ pairs, rows }) => {
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

  if (isComparisonComplete) {
    return <DisplayRankings scores={scores} />;
  }

  const currentPair = pairs[currentPairIndex];

  return (
    <ComparisonManager
      currentPair={currentPair}
      rows={rows}
      onChoiceSelect={handleChoiceSelection}
    />
  );
};

export { ChoiceManager, ComparisonManager };
