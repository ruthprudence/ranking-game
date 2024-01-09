import React, { useState } from 'react';
import SortingController from '../controller/SortingController'; // Corrected import statement

const PrioritySorter = () => {
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const model = new SortingController();

  const handleTopicSubmissionWrapper = (submittedTopic) => {
    model.handleTopicSubmission(submittedTopic, setShowInput, setTopic);
  };

  const handleSubmitWrapper = (rows) => {
    setIsSubmitted(true);
    model.handleChoiceSelection(rows);
  };

  const viewProps = {
    showInput,
    topic,
    isSubmitted,
    handleTopicSubmissionWrapper,
    handleSubmitWrapper,
  };

  return <SortingController {...viewProps} />;
};

export default PrioritySorter;
