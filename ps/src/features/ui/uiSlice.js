// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createItemsWithVotes } from '../../utils/gameHelpers';
import { validateRows } from '../../utils/validateRows';
import { submitInputPage } from '../actions';
import { initializeScores } from '../../utils/initializeScores';
import { createAction } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        topic: '',
        rows: ['', '', ''],
        value: '',
    },
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload;
        },
        submitTopic: (state, action) => {
            const topic = action.payload;
            if (!topic.trim()) {
                alert('Please enter a topic.');
                state.isSubmissionSuccessful = false;
                return;
            }
            state.topic = topic;
            state.isSubmissionSuccessful = true;
        },
        
        submitInputPage: (state, action) => {
            const rows = action.payload;
            if(!validateRows(rows)) {
              return;
            }
            state.items = createItemsWithVotes(state.rows);
            state.scores = initializeScores(state);
        },
    },

});

export const { setTopic } = uiSlice.actions;
export const submitTopic = createAction('ui/submitTopic');
export default uiSlice.reducer;
