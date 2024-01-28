import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SplashView } from './SplashView';
import { validateTopicState } from '../../features/validate/validateSlice';
import { submitTopic } from '../../features/ui/uiSlice';

const SplashPage = () => {
  const [localTopic, setLocalTopic] = useState('');
  const dispatch = useDispatch();
  const topicValidationResult = useSelector((state) => state.validate.topicValidationResult);

  useEffect(() => {
    // Validate topic whenever it changes
    dispatch(validateTopicState(localTopic));
  }, [localTopic, dispatch]);

  useEffect(() => {
    // Debugging: Log the input value and its validation result
    console.log("Input value:", localTopic, "Is valid:", topicValidationResult?.isValid);
  }, [localTopic, topicValidationResult]);

  const onTopicSubmit = () => {
    if (topicValidationResult?.isValid) {
      dispatch(submitTopic(localTopic));
    }
  };

  return (
    <SplashView 
      localTopic={localTopic} 
      setLocalTopic={setLocalTopic} 
      handleTopicSubmit={onTopicSubmit}
      isSubmitEnabled={topicValidationResult?.isValid}
    />
  );
};

export default SplashPage;
