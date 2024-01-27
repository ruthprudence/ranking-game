// validateSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { validateRows } from '../../utils/ui/validateRows';
import { MAXCHOICES, MINCHOICES } from '../../utils/ui/constants';

// Async thunk for topic validation
export const validateTopicAsync = createAsyncThunk(
    'validate/validateTopic',
    async (topic, { rejectWithValue }) => {
        try {
            const isValid = topic.trim() !== '';
            if (isValid) {
                return { topic };
            } else {
                return rejectWithValue('Topic is required.');
            }
        } catch (error) {
            return rejectWithValue(error.toString());
        }
    }
);

const validateSlice = createSlice({
    name: 'validate',
    initialState: {
        topicError: '',
        rowsError: '',
    },
    reducers: {
        // Reducers for other actions
    },
    extraReducers: (builder) => {
        builder.addCase(validateTopicAsync.fulfilled, (state, action) => {
            state.topicError = '';
        });
        builder.addCase(validateTopicAsync.rejected, (state, action) => {
            state.topicError = action.payload;
        });
    },
});

export default validateSlice.reducer;
