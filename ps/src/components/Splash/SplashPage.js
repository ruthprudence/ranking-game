// src/components/Splash/SplashPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SplashView } from './SplashView';
import { validateTopic } from '../../features/validate/validateSlice';
import { submitTopic } from '../../features/ui/uiSlice';
import { setCurrentPage } from '../../features/game/gameSlice';
import { validateTopicAsync } from '../../features/validate/validateSlice';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const dispatch = useDispatch();

    const handleTopicSubmit = async () => {
        try {
            const actionResult = await dispatch(validateTopicAsync(localTopic));
            if (validateTopicAsync.fulfilled.match(actionResult)) {
                dispatch(setCurrentPage('INPUT_PAGE'));
            }
        } catch (error) {
            console.error('Validation failed:', error);
        }
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
