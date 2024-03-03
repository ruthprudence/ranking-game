import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SplashView } from './SplashView';
import { validateTopicState } from '../../features/validate/validateSlice';
import { submitTopic } from '../../features/ui/uiSlice';
import { setCurrentPage } from '../../features/game/gameSlice'; 
import { PAGES } from '../../features/constants';

const SplashPage = ({ animationClass }) => {
  const [localTopic, setLocalTopic] = useState('');
  
  const topicValidationResult = useSelector((state) => state.validate.topicValidationResult);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch validateTopicState every time localTopic changes
    dispatch(validateTopicState(localTopic));
  }, [localTopic, dispatch]);

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById('headingSplash');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }, []);

  const onTopicSubmit = () => {
    if (topicValidationResult?.isValid) {
      dispatch(submitTopic(localTopic));
      dispatch(setCurrentPage(PAGES.INPUT));
    }
  };

  return (
    <div className={animationClass}>
      <SplashView 
        localTopic={localTopic} 
        setLocalTopic={setLocalTopic} 
        handleTopicSubmit={onTopicSubmit}
        isSubmitEnabled={topicValidationResult?.isValid}
      />
    </div>
  );
};

export default SplashPage;
