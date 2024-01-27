// Async thunk for topic validation

import { createAsyncThunk } from '@reduxjs/toolkit';
import { submitTopic } from '../../features/actions';
export const validateTopic = createAsyncThunk(
    'validate/validateTopic',
    async (topic, { dispatch }) => {
        // Perform validation logic
        const isValid = topic.trim() !== '';
        if (isValid) {
            // Dispatch actions based on validation result
            dispatch(submitTopic(topic));
            return { isValid: true, topic };
        } else {
            return { isValid: false, topicError: 'Topic is required.' };
        }
    }
);