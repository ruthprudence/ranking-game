// uiSlice.js
import { createSlice, createAction} from '@reduxjs/toolkit';
import { createItemsWithVotes } from '../matchup/createItemsWithVotes';
import { initializeScores } from '../matchup/initializeScores';
import { MAXCHOICES, MINCHOICES } from '../constants';
import { pairingLogic } from '../matchup/pairingLogic';
import { validateTopic } from '../../features/validate/validateTopic'

import { calculateRankings } from '../results/calculateRankings';
import { calculateScores } from '../results/calculateScores';

export const transitionToMatchup = createAction('ui/transitionToMatchup');

const initialState = {
  topic: '',
  rows: [{ value: '', animate: '' }, { value: '', animate: '' }, { value: '', animate: '' }],
  items: [],
  scores: {},
  pairs: [],
  currentPairIndex: 0,
  isComparisonComplete: false,
  rankings: [],
  isTopicValid: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
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
    clearRow: (state, action) => {
      const rowIndex = action.payload;
      if (rowIndex >= 0 && rowIndex < state.rows.length) {
        state.rows[rowIndex].value = '';
      }
    },
    
    addRow: (state) => {
      if (state.rows.length < MAXCHOICES) {
        state.rows.push({ value: '', animate: 'in' });
      }
    },
    removeRow: (state, action) => {
      if (state.rows.length > MINCHOICES) {
        const rowIndex = action.payload;
        if (rowIndex >= 0 && rowIndex < state.rows.length) {
          state.rows.splice(rowIndex, 1); // Remove the row immediately for now
        }
      }
    },
    updateRow: (state, action) => {
      const { index, updatedValue } = action.payload;
      if (index >= 0 && index < state.rows.length) {
        // Ensure that updatedValue is an object with a 'value' property
        if (typeof updatedValue === 'string') {
          if (typeof state.rows[index] === 'object' && state.rows[index] !== null) {
            state.rows[index].value = updatedValue;
          } else {
            // Handle the case where state.rows[index] is not an object
            state.rows[index] = { value: updatedValue };
          }
        } else if (updatedValue && typeof updatedValue === 'object') {
          state.rows[index] = { 
            ...state.rows[index],
            ...updatedValue 
          };
        }
      }
    },
    
    
    setValue: (state, action) => {
        state.value = action.payload;
    },  
    startMatchup: (state, action) => {
      const items = action.payload;
      state.pairs = pairingLogic(items);
      state.currentPairIndex = 0;
      state.isComparisonComplete = false;
    },  
    selectChoice: (state, action) => {
      const choiceName = action.payload;
    
      const updatedItems = state.items.map(item => {
        if (item.name === choiceName) {
          return { ...item, votes: (item.votes || 0) + 1 };
        }
        return item;
      });
    
      state.items = updatedItems;
    },
    incrementVote: (state, action) => {
      const selectedItem = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === selectedItem.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].votes += 1;
      }
    },

    nextPair: (state) => {
      state.currentPairIndex += 1;
    },
    handleChoiceSelect: (state, action) => {
      const { choiceIndex, items } = action.payload;
    
      if (state.pairs.length > state.currentPairIndex) {
        const currentPair = state.pairs[state.currentPairIndex];
        if (currentPair && currentPair.length === 2) {
          const selectedItem = items[currentPair[choiceIndex]];
          
          if (selectedItem) {
            // Directly update votes here
            const itemIndex = state.items.findIndex(item => item.id === selectedItem.id);
            if (itemIndex !== -1) {
              state.items[itemIndex].votes += 1; // Increment votes
            }
            state.currentPairIndex += 1;
          }
        }
      }
    
      // Check if the comparison is complete
      if (state.currentPairIndex >= state.pairs.length) {
        state.isComparisonComplete = true;
      }
    },
    completeMatchup: (state) => {
      state.rankings = calculateRankings(state.items);
    },
    resetState: () => initialState,
    
    
    
  
  },
  extraReducers: (builder) => {
    builder.addCase(validateTopic.fulfilled, (state, action) => {
      state.isTopicValid = action.payload.isTopicValid;
      if (state.isTopicValid) {
        state.topic = action.payload.topic;
      }
  
    });
    
  },
});

export const { resetState } = uiSlice.actions;

export const selectItems = (state) => state.ui.items;

export const { addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, setTopic, submitInputPage, submitTopic, handleValidation, handleTopicSubmit, selectChoice, incrementVote, startMatchup, nextPair, handleChoiceSelect, completeMatchup, clearRow } = uiSlice.actions;
  
  export default uiSlice.reducer;