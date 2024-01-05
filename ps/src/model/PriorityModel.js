export const sortPriorities = (choices) => {
  return choices.sort();
};

export const calculateScores = (choices) => {
  const scores = {};
  choices.forEach(choice => {
      scores[choice] = (scores[choice] || 0) + 1;
  });
  return scores;
};
