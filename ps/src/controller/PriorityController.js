import { calculateScores, sortPriorities } from '../model/PriorityModel';

export const handleChoiceSelection = (choices, initialScores, votes) => {
  console.log(`choices is ${choices} and initialScores is ${JSON.stringify(initialScores)}`);
  
  // Now passing the 'votes' array to calculateScores
  const scores = calculateScores(choices, initialScores, votes);

  console.log(`scores is ${JSON.stringify(scores)}`);
  const sortedPriorities = sortPriorities(Object.keys(scores));
  console.log(`sortedPriorities is ${JSON.stringify(sortedPriorities)}`);
  return { scores, sortedPriorities };
};

