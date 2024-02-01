import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';

export const BugView = ({
  description, 
  stepsToReproduce, 
  contactEmail, 
  isSubmitting, 
  submitSuccess, 
  submitError, 
  onDescriptionChange, 
  // Add props for stepsToReproduce and contactEmail handlers
  onSubmit, 
  onReset 
}) => {
  return (
    <div className="bug-view">
      <h1>Report a Bug</h1>
      <InputField
        value={description}
        onChange={onDescriptionChange}
        placeholder="Describe the bug"
      />
      {/* Add input fields for stepsToReproduce and contactEmail */}
      {submitError && <p className="error-message">{submitError}</p>}
      {submitSuccess && <p className="success-message">Bug reported successfully!</p>}
      <Button onClick={onSubmit} disabled={isSubmitting}>Submit Bug</Button>
      <Button onClick={onReset}>Reset</Button>
    </div>
  );
};

export default BugView;
