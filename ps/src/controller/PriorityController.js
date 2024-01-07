import { calculateScores, sortPriorities } from '../model/PriorityModel';

export const handleChoiceSelection = (choices, initialScores) => {
  const scores = calculateScores(choices, initialScores);
  const sortedPriorities = sortPriorities(Object.keys(scores));
  return { scores, sortedPriorities };
};
