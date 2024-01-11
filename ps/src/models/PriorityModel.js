// import { alert } from 'react-native';

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

export const getTieAdjustedRankings = (scores) => {
  const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  let lastScore = null;
  let rank = 0;
  let tieCount = 0; // Counts the number of ties for the current score

  return sortedChoices.map(([choice, score], index) => {
      if (score !== lastScore) {
          rank = index + 1; // Update rank for new score
          lastScore = score;
          tieCount = 1; // Reset tie count for the new score
      } else {
          tieCount++; // Increment tie count for a tie
      }

      // The rank for each item is the position where the first item of this tie appeared
      return [choice, score, rank];
  });
};
  
  export const getAdjustedRankingsData = (scores) => {
    return getTieAdjustedRankings(scores);
  };