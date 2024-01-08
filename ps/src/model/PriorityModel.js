export const sortPriorities = (choices) => {
  return choices.sort();
};

export const calculateScores = (choices, initialScores) => {
  const scores = { ...initialScores };

  choices.forEach(choice => {
    if (scores.hasOwnProperty(choice)) {
      scores[choice] += 1;
    }
  });

  return scores;
};

