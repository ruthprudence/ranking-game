import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BugView } from './BugView';
import { submitBugReport, updateDescription, resetBugReportForm } from '../../features/bugs/bugSlice';

const BugPage = () => {
  const [description, setDescription] = useState('');
  const [stepsToReproduce, setStepsToReproduce] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  
  const dispatch = useDispatch();
  const { isSubmitting, submitSuccess, submitError } = useSelector((state) => state.bugs);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    dispatch(updateDescription(e.target.value));
  };

  // Add handlers for stepsToReproduce and contactEmail

  const handleSubmit = () => {
    const bugData = { description, stepsToReproduce, contactEmail };
    dispatch(submitBugReport(bugData));
  };

  const handleReset = () => {
    setDescription('');
    setStepsToReproduce('');
    setContactEmail('');
    dispatch(resetBugReportForm());
  };

  return (
    <BugView 
      description={description}
      stepsToReproduce={stepsToReproduce}
      contactEmail={contactEmail}
      isSubmitting={isSubmitting}
      submitSuccess={submitSuccess}
      submitError={submitError}
      onDescriptionChange={handleDescriptionChange}
      // Add props for stepsToReproduce and contactEmail handlers
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  );
};

export default BugPage;
