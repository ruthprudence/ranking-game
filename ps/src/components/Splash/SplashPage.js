// src/components/Splash/SplashPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SplashView } from './SplashView';
import { validateRows } from '../../features/validate/validateRows'; // Import validateRows
import { validateTopicAsync } from '../../features/validate/validateSlice';
import { setCurrentPage } from '../../features/game/gameSlice';

const SplashPage = () => {
    const [localTopic, setLocalTopic] = useState('');
    const dispatch = useDispatch();

    // Define the rows that need to be validated
    // Assuming localTopic is what you need to validate. Adjust as necessary.
    const rows = [localTopic]; 

    const handleValidation = () => {
        const validationResult = validateRows(rows);
        if (!validationResult.isValid) {
            // Replace showAlert with actual implementation
            console.error(validationResult.message); // Temporary error display
        } else {
            // Proceed with valid rows
        }
    };

    const handleTopicSubmit = async () => {
        try {
            handleValidation(); // Call validation before submitting
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
