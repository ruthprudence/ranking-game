// useInitializeScores.js
import { useMemo } from 'react';

const useInitializeScores = (rows) => {
  const initialScores = useMemo(() => {
    const scores = {};
    rows.forEach(choice => {
      scores[choice.trim()] = 0;
    });
    return scores;
  }, [rows]);

  return initialScores;
};

export default useInitializeScores;
