export const sortPriorities = (choices) => {
  return choices.sort();
};

export const calculateScores = (choices, initialScores, votedItems) => {
  const scores = {...initialScores};

  choices.forEach(choice => {
    if (scores.hasOwnProperty(choice)) {
      scores[choice] += votedItems.includes(choice) ? 1 : 0;
    }
  });

  return scores;
};

