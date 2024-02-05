import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { BugView } from './BugView';
import { submitBugReport, updateDescription, resetBugReportForm } from '../../features/bug/bugSlice';

const BugPage = () => {
  const [description, setDescription] = useState('');
  const [stepsToReproduce, setStepsToReproduce] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  
  const dispatch = useDispatch();
  const { isSubmitting, submitSuccess, submitError } = useSelector((state) => state.bug);

  const validateDescription = () => {
    if (!description) {
      return "Description is required";
    }
    // Add any other validation rules for description
  };
  
  const validateStepsToReproduce = () => {
    if (!stepsToReproduce) {
      return "Steps to reproduce are required";
    }
    // Additional validation rules if needed
  };
  
  const validateContactEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      return "Email is invalid";
    }
  };  
  


  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    dispatch(updateDescription(e.target.value));
  };

  const handleStepsChange = (e) => {
    setStepsToReproduce(e.target.value);
  };

  const handleEmailChange = (e) => {
    setContactEmail(e.target.value);
  };
  
  useEffect(() => {
    // This function will be called when the component is unmounted
    return () => {
      dispatch(resetBugReportForm());
    };
  }, [dispatch]);

  // Add handlers for stepsToReproduce and contactEmail

  const handleSubmit = () => {
    const descriptionError = validateDescription();
    const stepsError = validateStepsToReproduce();
    const emailError = validateContactEmail();

    console.log(  descriptionError, stepsError, emailError);
  
    if (descriptionError || stepsError) {
      // Handle the errors, for example, by showing an error message to the user
    } else {
      dispatch(submitBugReport({ description, stepsToReproduce, contactEmail }));
    }
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
    onStepsChange={handleStepsChange}
    onEmailChange={handleEmailChange}
    onSubmit={handleSubmit}
    onReset={handleReset}
  />
  );
};

export default BugPage;
