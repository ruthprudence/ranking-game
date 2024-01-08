import React, { useState } from 'react';
import TopicInput from './ui/TopicInput';
import SortingInput from './SortingInput';
import { ChoiceManager } from './ComparisonManager';
import useRowManager from '../hooks/useRowManager';
import usePairGenerator from '../hooks/usePairGenerator';
import { MAXCHOICES } from '../utils/constants';
import { handleTopicSubmission, handleSubmit, handleChoiceSelection } from '../controller/PriorityController';

const PrioritySorter = () => {
  const { rows, addRow, removeRow, updateRow } = useRowManager(['', '', '']);
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState('');
  const { pairs } = usePairGenerator(rows);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Updated to use controller function
  const handleTopicSubmissionWrapper = (submittedTopic) => {
    handleTopicSubmission(submittedTopic, setShowInput, setTopic);
  };

  // Updated to use controller function
  const handleSubmitWrapper = () => {
    handleSubmit(rows, setIsSubmitted, handleChoiceSelection);
  };
  
  return (
    <div>
      {showInput ? (
        <TopicInput onSubmitTopic={handleTopicSubmissionWrapper} />
      ) : (
        <>
          <h2>Rank: {topic}!</h2>
          {!isSubmitted ? (
            <SortingInput
              rows={rows}
              addRow={addRow}
              updateRow={updateRow}
              removeRow={removeRow}
              handleSubmit={handleSubmitWrapper}
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
