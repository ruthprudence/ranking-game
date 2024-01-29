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
    items: [],
    scores: {},
  },
  reducers: {
    /** Splash Page */
    submitTopic: (state, action) => {
      const topic = action.payload;
      if (!topic.trim()) {
          alert('Please enter a topic.');
          return;
      }
      state.topic = topic;
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
      console.log("Selected choice name:", choiceName);
      console.log("Current items before update:", state.items);
    
      const updatedItems = state.items.map(item => {
        if (item.name === choiceName) {
          console.log(`Updating votes for ${choiceName}`);
          return { ...item, votes: (item.votes || 0) + 1 };
        }
        return item;
      });
    
      console.log("Updated items:", updatedItems);
      state.items = updatedItems;
    },
    incrementVote: (state, action) => {
      const selectedItem = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === selectedItem.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].votes += 1;
      }
    },
    
    
  
  },
});

export const selectItems = (state) => state.ui.items;

export const { addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, setTopic, submitInputPage, submitTopic, submitTopicAndAdvance, handleValidation, handleTopicSubmit, selectChoice, incrementVote } = uiSlice.actions;
  
  export default uiSlice.reducer;