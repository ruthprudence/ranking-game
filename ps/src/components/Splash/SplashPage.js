// SplashPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { SplashView } from './SplashView';
import {submitTopic } from '../../features/ui/uiSlice';
import { setCurrentPage } from '../../features/game/gameSlice';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const isSubmissionSuccessful = useSelector((state) => state.ui.isSubmissionSuccessful);
    const dispatch = useDispatch();

    const handleTopicSubmit = () => {
        dispatch(submitTopic(localTopic));
        dispatch(setCurrentPage('INPUT_PAGE'));
    };
  
    return (
        <SplashView 
            localTopic={localTopic} 
            setLocalTopic={setLocalTopic} 
            handleTopicSubmit={handleTopicSubmit}
        />
    );
};

export default SplashPage;
