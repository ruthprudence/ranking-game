import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';

export const BugView = ({
  description, 
  stepsToReproduce, 
  contactEmail, 
  isSubmitting, 
  submitSuccess, 
  submitError, 
  onDescriptionChange, 
  onStepsChange,
  onEmailChange,
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
      <InputField 
        value={stepsToReproduce} 
        onChange={onStepsChange} 
        placeholder="Steps to Reproduce" 
      />
      <InputField 
        value={contactEmail} 
        onChange={onEmailChange} 
        placeholder="Your Email (optional)" 
      />
      {submitError && <p className="error-message">{submitError}</p>}
      {submitSuccess && <p className="success-message">Bug reported successfully!</p>}
      <Button onClick={onSubmit} disabled={isSubmitting}>Submit Bug</Button>
      <Button onClick={onReset}>Reset</Button>
      <Footer />
    </div>
  );
};

export default BugView;
