// src/components/Splash/SplashPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SplashView } from './SplashView';
import { validateTopicState } from '../../features/validate/validateSlice';
import { submitTopic } from '../../features/ui/uiSlice';

const SplashPage = () => {
  const [localTopic, setLocalTopic] = useState('');
  const dispatch = useDispatch();
  const topicValidationResult = useSelector((state) => state.validate.topicValidationResult);
  const isTopicValid = topicValidationResult?.isValid;

  // Perform validation on localTopic change
  useEffect(() => {
    dispatch(validateTopicState(localTopic));
  }, [localTopic, dispatch]);

  const onTopicSubmit = () => {
    if (isTopicValid) {
      dispatch(submitTopic(localTopic)); // Dispatch the action to submit the topic
    }
  };

  return (
    <SplashView 
      localTopic={localTopic} 
      setLocalTopic={setLocalTopic} 
      handleTopicSubmit={onTopicSubmit}
      isSubmitEnabled={isTopicValid} // Enable or disable submit based on topic validity
    />
  );
};

export default SplashPage;
