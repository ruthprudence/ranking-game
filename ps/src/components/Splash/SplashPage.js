// SplashPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { SplashView } from './SplashView';
import {submitTopic, setTopic, setCurrentPage} from '../../features/ui/uiSlice';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const dispatch = useDispatch();

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
