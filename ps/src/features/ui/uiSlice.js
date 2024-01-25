// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createItemsWithVotes } from '../../utils/createItemsWithVotes';
import { validateRows } from '../../utils/validateRows';
import { initializeScores } from '../../utils/initializeScores';
import { createAction } from '@reduxjs/toolkit';
import { MAXCHOICES, MINCHOICES } from '../../utils/constants';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        topic: '',
        rows: ['', '', ''],
        value: '',
        isSubmissionFailed: false, 
    },
    reducers: {
        /** Splash Page
         * 1. Set the topic
         */
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
        /** Input Page
         * 1. Add a row
         * 2. Remove a row
         * 3. Update a row
         * 4. Submit the input page
         * 5. Set the items
         * 6. Set the value
         */
        addItem: (state) => {
            state.items.push('');
        },
        setTopic: (state, action) => {
            state.topic = action.payload;
        },
        updateItem: (state, action) => {
            const { index, value } = action.payload;
            state.items[index] = value;
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addRow: (state) => {
            if (state.rows.length < MAXCHOICES) {
              state.rows.push('');
            }
        },
        removeRow: (state, action) => {
            if (state.rows.length > MINCHOICES && action.payload >= 0 && action.payload < state.rows.length) {
              state.rows.splice(action.payload, 1);
            }
        },
        updateRow: (state, action) => {
            const { index, updatedValue } = action.payload;
            if (index >= 0 && index < state.rows.length) {
                state.rows[index] = updatedValue;
            }
        },
        
        setValue: (state, action) => {
            state.value = action.payload;
        },
        submitInputPage: (state, action) => {
            const rows = action.payload;
            if (!validateRows(rows)) {
                state.isSubmissionFailed = true;
                return;
            }
            state.items = createItemsWithVotes(state.rows);
            state.scores = initializeScores(state);
            state.isSubmissionFailed = false;
        },
        
    },
});

export const { addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, setTopic, submitInputPage } = uiSlice.actions;
export const submitTopic = createAction('ui/submitTopic');
export default uiSlice.reducer;