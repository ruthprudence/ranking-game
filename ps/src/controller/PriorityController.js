import { calculateScores, sortPriorities } from '../model/PriorityModel';

export const handleChoiceSelection = (choices, initialScores) => {
  console.log(`choices is ${choices} and initialScores is ${JSON.stringify(initialScores)}`);
  const scores = calculateScores(choices, initialScores);
  const sortedPriorities = sortPriorities(Object.keys(scores));
  console.log(`sortedPriorities is ${JSON.stringify(sortedPriorities)}`);
  return { scores, sortedPriorities };
};

