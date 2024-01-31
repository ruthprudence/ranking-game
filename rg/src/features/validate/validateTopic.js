import { createAsyncThunk } from '@reduxjs/toolkit';
import { submitTopic } from '../actions';
import { sanitizeAndTruncate } from '../ui/inputUtils'; // Import the utility function

export const validateTopic = createAsyncThunk(
    'validate/validateTopic',
    async (topic, { dispatch }) => {
        // Use the sanitizeAndTruncate function
        const processedTopic = sanitizeAndTruncate(topic);

        const isNotEmpty = processedTopic.trim() !== '';
        if (isNotEmpty) {
            dispatch(submitTopic(processedTopic));
            return { isValid: true, topic: processedTopic };
        } else {
            return { isValid: false, topicError: 'Topic is required.' };
        }
    }
);
