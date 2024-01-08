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

export const initializeScores = (rows) => {
  return rows.reduce((acc, choice) => {
    acc[choice.trim()] = 0;
    return acc;
  }, {});
};
