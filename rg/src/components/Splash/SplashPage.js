import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SplashView } from './SplashView';
import { validateTopicState } from '../../features/validate/validateSlice';
import { submitTopic } from '../../features/ui/uiSlice';
import { setCurrentPage } from '../../features/game/gameSlice'; 
import { PAGES } from '../../features/constants';

const SplashPage = () => {
  const [localTopic, setLocalTopic] = useState('');
  
  const isTopicValid = useSelector((state) => state.ui.isTopicValid);
  const topicValidationResult = useSelector((state) => state.validate.topicValidationResult);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch validateTopicState every time localTopic changes
    dispatch(validateTopicState(localTopic));
  }, [localTopic, dispatch]);

  const onTopicSubmit = () => {
    if (topicValidationResult?.isValid) {
      dispatch(submitTopic(localTopic));
      dispatch(setCurrentPage(PAGES.INPUT));
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
