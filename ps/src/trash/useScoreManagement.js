import { useMemo } from 'react';

const useScoreManagement = (rows, scores) => {
  const initialScores = useMemo(() => {
    const initial = {};
    rows.forEach(choice => {
      initial[choice.trim()] = 0;
    });
    return initial;
  }, [rows]);

  const sortedPriorities = useMemo(() => {
    return Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  }, [scores]);

  const adjustedRankings = useMemo(() => {
    const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    let lastScore = null, rank = 0;
    return sortedChoices.map(([choice, score], index) => {
      if (score !== lastScore) {
        rank = index + 1;
        lastScore = score;
      }
      return [choice, score, rank];
    });
  }, [scores]);

  return { initialScores, sortedPriorities, adjustedRankings };
};

export default useScoreManagement;
