// SplashPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTopic, setCurrentPage } from '../../features/ui/uiSlice'; 
import { SplashView } from './SplashView';
import {submitTopic} from '../../features/actions';

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
