// validateSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { validateRows } from '../../utils/ui/validateRows';
import { MAXCHOICES, MINCHOICES } from '../../utils/ui/constants';

export const validateSlice = createSlice({
    name: 'validate',
    initialState: {
        topicError: '',
        rowsError: '',
    },
    reducers: {
        validateTopic: (state, action) => {
            const topic = action.payload;
            state.topicError = topic.trim() ? '' : 'Topic is required.';
        },
        validateInputRows: (state, action) => {
            const rows = action.payload;
            state.rowsError = validateRows(rows, MAXCHOICES, MINCHOICES)
                ? ''
                : `Rows must be between ${MINCHOICES} and ${MAXCHOICES}.`;
        },
        // ... other validation reducers
    },
});

export const { validateTopic, validateInputRows } = validateSlice.actions;
export default validateSlice.reducer;
