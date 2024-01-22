// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createItemsWithVotes } from '../../utils/gameHelpers';
import { validateRows } from '../../utils/validateRows';

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
                return;
            }
            state.topic = topic;
        },
        submitInputPage: (state, action) => {
            const rows = action.payload;
            if(!validateRows(rows)) {
              return;
            }
            state.items = createItemsWithVotes(state.rows);
        },
    },

});

export const { setTopic, submitTopic, submitInputPage } = uiSlice.actions;
export default uiSlice.reducer;
