// useDisplayController.js
import { useMemo } from 'react';
import { getAdjustedRankingsData } from '../models/DisplayModel';

const useDisplayController = (scores) => {
  const adjustedRankings = useMemo(() => getAdjustedRankingsData(scores), [scores]);

  return { adjustedRankings };
};

export default useDisplayController;
