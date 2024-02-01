import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BugView } from './BugView';
import { submitBugReport, updateDescription, resetBugReportForm } from '../../features/bug/bugSlice';

const BugPage = () => {
  const [description, setDescription] = useState('');
  const [stepsToReproduce, setStepsToReproduce] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  
  const dispatch = useDispatch();
  const { isSubmitting, submitSuccess, submitError } = useSelector((state) => state.bug);


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
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  );
};

export default BugPage;
