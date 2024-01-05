import React, { useState } from 'react';
import TopicInput from './TopicInput';
import SortingInput from './SortingInput';
import ChoiceManager from './ChoiceManager';
import useRowManager from './hooks/useRowManager'; // Custom hook for row management
import usePairGenerator from './hooks/usePairGenerator'; // Custom hook for pair generation

const MAXCHOICES = 12;

const PrioritySorter = () => {
  const { rows, addRow, removeRow, updateRow } = useRowManager(['', '', '']);
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState('');
  const { pairs } = usePairGenerator(rows);

  const handleTopicSubmission = (submittedTopic) => {
    setTopic(submittedTopic);
    setShowInput(false);
  };

  return (
    <div>
      {showInput ? (
        <TopicInput onSubmitTopic={handleTopicSubmission} />
      ) : (
        <>
          <h2>Rank: {topic}!</h2>
          <SortingInput
            rows={rows}
            addRow={addRow}
            updateRow={updateRow}
            removeRow={removeRow}
            MAXCHOICES={MAXCHOICES}
          />
          <ChoiceManager pairs={pairs} rows={rows} />
        </>
      )}
    </div>
  );
};

export default PrioritySorter;

// import React, { useState, useEffect } from 'react';
// import TopicInput from './TopicInput';
// import SortingInput from './SortingInput';
// import SortingProcess from './SortingProcess'; // Assumes this component is designed to handle left and right choice display

// const MAXCHOICES = 12;

// const PrioritySorter = () => {
//   const [rows, setRows] = useState(['', '', '']);
//   const [currentPair, setCurrentPair] = useState(null);
//   const [pairIndex, setPairIndex] = useState(0);
//   const [pairs, setPairs] = useState([]);
//   const [scores, setScores] = useState({});
//   const [sortedChoices, setSortedChoices] = useState([]);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isComparisonComplete, setIsComparisonComplete] = useState(false);
//   const [showInput, setShowInput] = useState(true);
//   const [topic, setTopic] = useState('');

//   // Calculate all pairs when rows are updated
//   useEffect(() => {
//     const newPairs = [];
//     for (let i = 0; i < rows.length - 1; i++) {
//       for (let j = i + 1; j < rows.length; j++) {
//         newPairs.push([i, j]);
//       }
//     }
//     setPairs(newPairs);
//   }, [rows]);

//   const addRow = () => {
//     if (rows.length < MAXCHOICES) {
//       setRows([...rows, '']);
//     }
//   };

//   const removeRow = (index) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   };

//   const updateRow = (index, value) => {
//     const newRows = [...rows];
//     newRows[index] = value;
//     setRows(newRows);
//   };

//   const handleSubmit = () => {
//     setIsSubmitted(true);
//     setCurrentPair(pairs[0]);
//     setScores(rows.reduce((acc, choice) => ({ ...acc, [choice]: 0 }), {}));
//   };

//   const handleChoiceSelection = (selectedChoice) => {
//     const updatedScores = { ...scores, [selectedChoice]: (scores[selectedChoice] || 0) + 1 };
//     setScores(updatedScores);

//     const nextIndex = pairIndex + 1;
//     if (nextIndex < pairs.length) {
//       setCurrentPair(pairs[nextIndex]);
//       setPairIndex(nextIndex);
//     } else {
//       setSortedChoices(Object.entries(updatedScores).sort((a, b) => b[1] - a[1]).map(entry => entry[0]));
//       setIsSubmitted(false);
//       setIsComparisonComplete(true);
//     }
//   };

//   const handleTopicSubmission = (submittedTopic) => {
//     setTopic(submittedTopic);
//     setShowInput(false);
//   };

//   return (
//     <div>
//       {showInput ? (
//         <TopicInput onSubmitTopic={handleTopicSubmission} />
//       ) : (
//         <>
//           <h2>Rank: {topic}!</h2>
//           {!isSubmitted && !isComparisonComplete ? (
//             <SortingInput
//               rows={rows}
//               addRow={addRow}
//               updateRow={updateRow}
//               removeRow={removeRow}
//               handleSubmit={handleSubmit}
//               MAXCHOICES={MAXCHOICES}
//             />
//           ) : (
//             <SortingProcess
//               isSubmitted={isSubmitted}
//               currentPair={currentPair}
//               handleChoiceSelection={handleChoiceSelection}
//               choices={rows}
//               isComparisonComplete={isComparisonComplete}
//               sortedChoices={sortedChoices}
//               scores={scores}
//             />
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default PrioritySorter;
