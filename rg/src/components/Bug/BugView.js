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
      <label htmlFor="bug-description">Bug Description:</label>
      <InputField 
        id="bug-description"
        value={description} 
        onChange={onDescriptionChange} 
        placeholder="Describe the bug" 
      />
      <label htmlFor="steps-to-reproduce">Steps to Reproduce:</label>
      <InputField
        id="steps-to-reproduce"
        value={stepsToReproduce} 
        onChange={onStepsChange} 
        placeholder="Steps to Reproduce" 
      />
      <label htmlFor="contact-email">Contact Email:</label>
      <InputField 
        id="contact-email"
        value={contactEmail} 
        onChange={onEmailChange} 
        placeholder="Your Email (optional)" 
      />
      {submitError && <p className="error-message">{submitError}</p>}
      {submitSuccess && <p className="success-message">Bug reported successfully!</p>}
      <Button id="submitBug" onClick={onSubmit} disabled={isSubmitting}>Submit Bug</Button>
      <Button id="resetBug" onClick={onReset}>Reset</Button>
      <Footer />
    </div>
  );
};

export default BugView;
