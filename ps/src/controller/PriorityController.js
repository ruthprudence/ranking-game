import { calculateScores, sortPriorities, initializeScores} from '../model/PriorityModel';

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
    alert("Please fill in all entries before submitting.");
    return;
  }
  const initialScores = initializeScores(rows);
  handleChoiceSelection(rows, initialScores);
  setIsSubmitted(true);
};
