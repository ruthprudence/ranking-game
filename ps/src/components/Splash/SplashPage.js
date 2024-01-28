// src/components/Splash/SplashPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SplashView } from './SplashView';
import { setTopic, handleTopicSubmit } from '../../features/ui/uiSlice';

const SplashPage = () => {
  const [localTopic, setLocalTopic] = useState('');
  const dispatch = useDispatch();

  const onTopicSubmit = () => {
    dispatch(handleTopicSubmit(localTopic));
  };

  return (
    <SplashView 
      localTopic={localTopic} 
      setLocalTopic={setLocalTopic} 
      handleTopicSubmit={onTopicSubmit}
    />
  );
};

export default SplashPage;
