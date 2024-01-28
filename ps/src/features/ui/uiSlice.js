// uiSlice.js
import { createSlice, createAction} from '@reduxjs/toolkit';
import { createItemsWithVotes } from '../matchup/createItemsWithVotes';
import { validateRows } from '../validate/validateRows';
import { initializeScores } from '../matchup/initializeScores';
import { MAXCHOICES, MINCHOICES } from '../constants';

export const transitionToMatchup = createAction('ui/transitionToMatchup');

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    topic: '',
    rows: ['', '', ''],
    value: '',
    isSubmissionFailed: false,
    items: [],
    scores: {}
  },
  reducers: {

      
        submitTopic: (state, action) => {
            const topic = action.payload;
            if (!topic.trim()) {
                state.isSubmissionSuccessful = false;
                return;
            }
            state.topic = topic;
            state.isSubmissionSuccessful = true;
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
        
    },
});

export const { updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, setTopic, submitInputPage, submitTopic } = uiSlice.actions;
  
  export default uiSlice.reducer;