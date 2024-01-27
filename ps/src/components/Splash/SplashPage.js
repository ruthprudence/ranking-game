// src/components/Splash/SplashPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SplashView } from './SplashView';
import { validateRows } from '../../features/validate/validateRows'; // Import validateRows
import { validateTopicAsync } from '../../features/validate/validateSlice';
import { setCurrentPage } from '../../features/game/gameSlice';
import { submitTopicAndAdvance } from '../../features/ui/uiSlice';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const dispatch = useDispatch();

    const rows = [localTopic]; 

    const handleValidation = () => {
        const validationResult = validateRows(rows);
        if (!validationResult.isValid) {
            console.error(validationResult.message); // Temporary error display
        } else {
            // Proceed with valid rows
        }
    };

    const handleTopicSubmit = async () => {
        try {
            const validationResult = validateRows(rows);
            if (!validationResult.isValid) {
                console.error(validationResult.message);
            } else {
                // Dispatch the new action here
                dispatch(submitTopicAndAdvance(localTopic));
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
