import { createAsyncThunk } from '@reduxjs/toolkit';
import { submitTopic } from '../actions';
import { sanitizeAndTruncate } from '../ui/inputUtils'; // Import the utility function

export const validateTopic = createAsyncThunk(
    'validate/validateTopic',
    async (topic, { dispatch }) => {
        const processedTopic = sanitizeAndTruncate(topic);
        const isTopicValid = processedTopic.trim() !== '';

        if (isTopicValid) {
            dispatch(submitTopic(processedTopic));
            return { isTopicValid, topic: processedTopic };
        } else {
            return { isTopicValid, topicError: 'Topic is required.' };
        }
    }
);
