import React, { useState } from 'react';
import TopicInput from './ui/TopicInput';
import SortingInput from './SortingInput';
import ChoiceManager from './ChoiceManager';
import useRowManager from '../hooks/useRowManager';
import usePairGenerator from '../hooks/usePairGenerator';
import { MAXCHOICES } from '../utils/constants';

const PrioritySorter = () => {
  const { rows, addRow, removeRow, updateRow } = useRowManager(['', '', '']);
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState('');
  const { pairs } = usePairGenerator(rows);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTopicSubmission = (submittedTopic) => {
    setTopic(submittedTopic);
    setShowInput(false);
  };

  const handleSubmit = () => {
    // Check for blank entries
    const hasBlankEntries = rows.some(row => row.trim() === '');
    if (hasBlankEntries) {
      alert("Please fill in all entries before submitting."); // Or handle the error differently
      return;
    }

    setIsSubmitted(true); // Proceed only if all entries are filled
  };

  return (
    <div>
      {showInput ? (
        <TopicInput onSubmitTopic={handleTopicSubmission} />
      ) : (
        <>
          <h2>Rank: {topic}!</h2>
          {!isSubmitted ? (
            <SortingInput
              rows={rows}
              addRow={addRow}
              updateRow={updateRow}
              removeRow={removeRow}
              handleSubmit={handleSubmit}
              MAXCHOICES={MAXCHOICES}
            />
          ) : (
            <ChoiceManager pairs={pairs} rows={rows} />
          )}
        </>
      )}
    </div>
  );
};

export default PrioritySorter;
