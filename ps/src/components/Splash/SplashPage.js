// SplashPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitTopic } from '../../features/ui/uiSlice'; // Update this path as per your project structure
import { SplashView } from './SplashView';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const dispatch = useDispatch();

    // Pass this function to the SplashView
    const handleTopicSubmit = () => {
        dispatch(submitTopic(localTopic));
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
