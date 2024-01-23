// SplashPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { SplashView } from './SplashView';
import {submitTopic } from '../../features/ui/uiSlice';
import { setCurrentPage } from '../../features/game/gameSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const isSubmissionSuccessful = useSelector((state) => state.ui.isSubmissionSuccessful);
    const dispatch = useDispatch();

    const handleTopicSubmit = () => {
        dispatch(submitTopic(localTopic));
    };

    useEffect(() => {
        if (isSubmissionSuccessful) {
            dispatch(setCurrentPage('INPUT_PAGE'));
        }
    }, [isSubmissionSuccessful, dispatch]);
    

    return (
        <SplashView 
            localTopic={localTopic} 
            setLocalTopic={setLocalTopic} 
            handleTopicSubmit={handleTopicSubmit}
        />
    );
};

export default SplashPage;
