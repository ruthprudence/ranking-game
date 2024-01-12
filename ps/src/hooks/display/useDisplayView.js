// useDisplayView.js
import { useMemo } from 'react';

const useDisplayView = (scores) => {
  const adjustedRankings = useMemo(() => {
    return DisplayController.getRankings(scores);
  }, [scores]);

  return { adjustedRankings };
};

export default useDisplayView;
