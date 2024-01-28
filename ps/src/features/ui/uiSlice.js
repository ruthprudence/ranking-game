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
    submitInputPage: (state, action) => {
        if (!validateRows(state.rows)) {
          state.isSubmissionFailed = true;
        } else {
          state.isSubmissionFailed = false;
          state.items = createItemsWithVotes(state.rows);
          state.scores = initializeScores(state); // Ensure items are correctly passed
        }
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
        // addItem: (state) => {
        //     state.items.push('');
        // },
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
        submitTopicAndAdvance: (state, action) => {
          const topic = action.payload;
          if (!topic.trim()) {
              alert('Please enter a topic.');
              state.isSubmissionFailed = true;
          } else {
              state.topic = topic;
              state.isSubmissionFailed = false;
              state.currentPage = 'NEXT_PAGE';
          }
      },
      handleValidation: (state) => {
        const validationResult = validateRows([state.topic]);
        if (!validationResult.isValid) {
          console.error(validationResult.message);
        } else {
          // Code for handling valid rows
        }
      },
      handleTopicSubmit: async (state, action) => {
        try {
          const validationResult = validateRows([state.topic]);
          if (!validationResult.isValid) {
            console.error(validationResult.message);
          } else {
            state.topic = action.payload;
            // Additional actions on successful topic submission
          }
        } catch (error) {
          console.error('Validation failed:', error);
        }
      },
    },
});

export const { addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, setTopic, submitInputPage, submitTopic, submitTopicAndAdvance, handleValidation, handleTopicSubmit } = uiSlice.actions;
  
  export default uiSlice.reducer;