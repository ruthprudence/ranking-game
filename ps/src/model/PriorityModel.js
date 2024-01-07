export const sortPriorities = (choices) => {
  return choices.sort();
};

export const calculateScores = (choices, initialScores) => {
  choices.forEach(choice => {
    if (initialScores.hasOwnProperty(choice.trim())) {
      initialScores[choice.trim()] += 1;
    }
  });
  return initialScores;
};
