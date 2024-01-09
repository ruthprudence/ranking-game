import React, { useState } from 'react';
import TopicInput from '../components/ui/TopicInput';
import SortingInputController from '../controller/SortingController';

const PrioritySorter = () => {
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTopicSubmissionWrapper = (submittedTopic) => {
    setTopic(submittedTopic);
    setShowInput(false);
  };

  const handleSubmitWrapper = (rows) => {
    setIsSubmitted(true);
    // Additional logic for handling submission
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
            <div>Results or next steps after submission will be displayed here.</div>
          )}
        </>
      )}
    </div>
  );
};

export default PrioritySorter;
