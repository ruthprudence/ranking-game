import React, { useState } from 'react';
import TopicInput from './TopicInput';
import SortingInput from './SortingInput';
import SortingProcess from './SortingProcess';

const MAXCHOICES = 13;

const PrioritySorter = () => {
  const [rows, setRows] = useState(['rock', 'paper', 'scissors']);
  const [currentPair, setCurrentPair] = useState(null);
  const [scores, setScores] = useState({});
  const [sortedChoices, setSortedChoices] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isComparisonComplete, setIsComparisonComplete] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState(''); 

  const addRow = () => {
    if (rows.length < MAXCHOICES) {
      setRows([...rows, '']);
    }
  };

  const removeRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const updateRow = (index, value) => {
    const newRows = [...rows];
    newRows[index] = value;
    setRows(newRows);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setCurrentPair([0, 1]);
    setScores(rows.reduce((acc, choice) => ({ ...acc, [choice]: 0 }), {}));
  };

  const handleChoiceSelection = (selectedChoice) => {
    const updatedScores = { ...scores, [selectedChoice]: (scores[selectedChoice] || 0) + 1 };
    setScores(updatedScores);

    if (currentPair[1] < rows.length - 1) {
      setCurrentPair([currentPair[0], currentPair[1] + 1]);
    } else if (currentPair[0] < rows.length - 2) {
      setCurrentPair([currentPair[0] + 1, currentPair[0] + 2]);
    } else {
      setSortedChoices(Object.entries(updatedScores).sort((a, b) => b[1] - a[1]).map(entry => entry[0]));
      setIsSubmitted(false);
      setIsComparisonComplete(true);
    }
  };

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
          <h2>Topic: {topic}</h2>
          {!isSubmitted && !isComparisonComplete ? (
            <SortingInput
              rows={rows}
              addRow={addRow}
              updateRow={updateRow}
              removeRow={removeRow}
              handleSubmit={handleSubmit}
              MAXCHOICES={MAXCHOICES}
            />
          ) : (
            <SortingProcess
              isSubmitted={isSubmitted}
              currentPair={currentPair}
              handleChoiceSelection={handleChoiceSelection}
              choices={rows}
              isComparisonComplete={isComparisonComplete}
              sortedChoices={sortedChoices}
              scores={scores}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PrioritySorter;