// SplashPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { SplashView } from './SplashView';
import { submitTopic } from '../../features/ui/uiSlice';
import { setCurrentPage } from '../../features/game/gameSlice';
import { validateTopic } from '../../features/validate/validateSlice';
import { PAGES } from '../../utils/ui/constants';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const dispatch = useDispatch();
    const topicError = useSelector((state) => state.validate.topicError);

    const handleTopicSubmit = async () => {
        await dispatch(validateTopic(localTopic));

        // Check if the validation passed (no error)
        if (!topicError) {
            dispatch(submitTopic(localTopic));
            onAdvance();
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
