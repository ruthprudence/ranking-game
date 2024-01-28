// uiSlice.js
import { createSlice, createAction} from '@reduxjs/toolkit';
import { createItemsWithVotes } from '../matchup/createItemsWithVotes';
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
    /** Splash Page */
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
    setTopic: (state, action) => {
      state.topic = action.payload;
    },

    /** Input Page */
    submitInputPage: (state) => {
          state.items = createItemsWithVotes(state.rows);
          state.scores = initializeScores(state);
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
    selectChoice: (state, action) => {
      const choiceName = action.payload;
      state.items = state.items.map(item => {
        if (item.name === choiceName) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      });
    },
  
  },
});

export const selectItems = (state) => state.ui.items;

export const { addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, setTopic, submitInputPage, submitTopic, submitTopicAndAdvance, handleValidation, handleTopicSubmit, selectChoice } = uiSlice.actions;
  
  export default uiSlice.reducer;