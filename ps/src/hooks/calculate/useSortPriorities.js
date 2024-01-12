// useSortPriorities.js
import { useMemo } from 'react';

const useSortPriorities = (choices) => {
  const sortedPriorities = useMemo(() => {
    return choices.sort();
  }, [choices]);

  return sortedPriorities;
};

export default useSortPriorities;
