// SplashPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { SplashView } from './SplashView';
import { submitTopic } from '../../features/ui/uiSlice';
import { setCurrentPage } from '../../features/game/gameSlice';
import { validateTopic } from '../../features/validate/validateSlice';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const topicError = useSelector((state) => state.validate.topicError);
    const dispatch = useDispatch();

    // useEffect hook to check if the topic submission is valid
    useEffect(() => {
        if (localTopic && !topicError) {
            dispatch(submitTopic(localTopic));
            dispatch(setCurrentPage('INPUT_PAGE'));
        }
    }, [localTopic, topicError, dispatch]);

    const handleTopicSubmit = () => {
        dispatch(validateTopic(localTopic));
        // Removed the immediate setCurrentPage dispatch
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
