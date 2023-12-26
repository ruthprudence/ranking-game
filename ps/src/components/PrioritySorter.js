import React, { useState } from 'react';
import InputRow from './InputRow';
import ComparisonUI from './ComparisonUI';
import ResultsTable from './ResultsTable';

const MAXCHOICES = 13;

const PrioritySorter = () => {
  const [rows, setRows] = useState(['rock', 'paper', 'scissors']);
  const [currentPair, setCurrentPair] = useState(null);
  const [scores, setScores] = useState({});
  const [sortedChoices, setSortedChoices] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isComparisonComplete, setIsComparisonComplete] = useState(false);

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

  return (
    <div>
      {!isSubmitted && !isComparisonComplete && rows.map((row, index) => (
        <InputRow
          key={index}
          index={index}
          value={row}
          onUpdate={updateRow}
          onRemove={removeRow}
        />
      ))}
      {!isSubmitted && !isComparisonComplete && rows.length < MAXCHOICES - 1 && (
        <button onClick={addRow}>Add</button>
      )}
      {!isSubmitted && !isComparisonComplete && rows.length >= MAXCHOICES && (
        <p>You have reached the maximum number of items.</p>
      )}
      {!isSubmitted && !isComparisonComplete && <button onClick={handleSubmit}>Submit</button>}

      {isSubmitted && currentPair[0] < rows.length - 1 && (
        <ComparisonUI
          pair={currentPair}
          onChoiceSelection={handleChoiceSelection}
          choices={rows}
        />
      )}

      {isComparisonComplete && <ResultsTable sortedChoices={sortedChoices} scores={scores} />}
    </div>
  );
};

export default PrioritySorter;
