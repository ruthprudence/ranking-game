import { calculateScores, sortPriorities } from '../model/PriorityModel';

export const handleChoiceSelection = (choices, initialScores) => {
    if (!Array.isArray(choices)) {
      throw new Error('choices must be an array');
    }
  
    const scores = calculateScores(choices, initialScores);
    const sortedPriorities = sortPriorities(choices);
    return { scores, sortedPriorities };
  };
