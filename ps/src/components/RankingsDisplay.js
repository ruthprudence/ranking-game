import React from 'react';

const RankingsDisplay = ({ scores }) => {
  const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  return (
    <div>
      <h3>Rankings</h3>
      {sortedChoices.map(([choice, score], index) => (
        <div key={choice}>
          {index + 1}: {choice}
        </div>
      ))}
    </div>
  );
};

export default RankingsDisplay;
