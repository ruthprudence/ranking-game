export const sortPriorities = (choices) => {
  return choices.sort();
};

export const calculateScores = (choices, initialScores) => {
  // Clone initialScores to avoid mutating the original object
  const scores = {...initialScores};

  // Iterate over each choice and update its score
  choices.forEach(choice => {
    if (scores.hasOwnProperty(choice)) {
      scores[choice] += 1; // Increment the score for this choice
    }
  });

  return scores;
};
