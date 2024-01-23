// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createItemsWithVotes } from '../../utils/gameHelpers';
import { validateRows } from '../../utils/validateRows';
import { submitInputPage } from '../actions';
import { initializeScores } from '../../utils/initializeScores';
import { createAction } from '@reduxjs/toolkit';
import { MAXCHOICES, MINCHOICES } from '../../utils/constants';

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
        addItem: (state) => {
            state.items.push('');
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
            if (state.rows.length > MINCHOICES) {
              state.rows.splice(action.payload, 1);
            }
        },
        updateRow: (state, action) => {
            const { index, updatedValue } = action.payload;
            state.rows[index] = updatedValue;
        },
        setValue: (state, action) => {
            state.value = action.payload;
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

export const { addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, } = uiSlice.actions;
export const submitTopic = createAction('ui/submitTopic');
export default uiSlice.reducer;
