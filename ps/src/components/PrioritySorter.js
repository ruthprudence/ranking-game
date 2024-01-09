import React, { useState } from 'react';
import TopicInput from '../components/ui/TopicInput';
import SortingInputController from '../controller/SortingController';
import { ChoiceManager } from './ComparisonManager';
import usePairGenerator from '../hooks/usePairGenerator';
import { handleTopicSubmission, handleChoiceSelection } from '../controller/PriorityController';

const PrioritySorter = () => {
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Updated to use controller function
  const handleTopicSubmissionWrapper = (submittedTopic) => {
    handleTopicSubmission(submittedTopic, setShowInput, setTopic);
  };

  const handleSubmitWrapper = (rows) => {
    setIsSubmitted(true);
    handleChoiceSelection(rows);
  };

  return (
    <div>
      {showInput ? (
        <TopicInput onSubmitTopic={handleTopicSubmissionWrapper} />
      ) : (
        <>
          <h2>Rank: {topic}!</h2>
          {!isSubmitted ? (
            <SortingInputController onSubmit={handleSubmitWrapper} />
          ) : (
            <ChoiceManager />
          )}
        </>
      )}
    </div>
  );
};

export default PrioritySorter;
