import { alert } from 'react-native';

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
  const scores = {};
  rows.forEach(choice => {
    scores[choice.trim()] = 0;
  });
  return scores;
};

export const getSortedChoices = (scores) => {
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
};


export const handleChoiceSelection = (choices, initialScores) => {
  console.log(`choices is ${choices} and initialScores is ${JSON.stringify(initialScores)}`);
  const scores = calculateScores(choices, initialScores);
  const sortedPriorities = sortPriorities(Object.keys(scores));
  console.log(`sortedPriorities is ${JSON.stringify(sortedPriorities)}`);
  return { scores, sortedPriorities };
};

export const handleTopicSubmission = (submittedTopic, setShowInput, setTopic) => {
  setTopic(submittedTopic);
  setShowInput(false);
};

export const handleSubmit = (rows, setIsSubmitted, handleChoiceSelection) => {
  if (rows.some(row => row.trim() === '')) {
    alert("Please fill in all entries before submitting."); // Use the alert function
    return;
  }
  const initialScores = initializeScores(rows);
  handleChoiceSelection(rows, initialScores);
  setIsSubmitted(true);
};
