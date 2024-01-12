// useAdjustedRankingsData.js
import { useMemo } from 'react';

const useAdjustedRankingsData = (scores) => {
  const adjustedRankings = useMemo(() => {
    const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    let lastScore = null;
    let rank = 0;
    let tieCount = 0;

    return sortedChoices.map(([choice, score], index) => {
      if (score !== lastScore) {
        rank = index + 1;
        lastScore = score;
        tieCount = 1;
      } else {
        tieCount++;
      }
      return [choice, score, rank];
    });
  }, [scores]);

  return adjustedRankings;
};

export default useAdjustedRankingsData;
