import { createSlice } from '@reduxjs/toolkit';

export const validateSlice = createSlice({
  name: 'validate',
  initialState: {
    topicValidationResult: { isValid: false, message: '' },
    rowsValidationResult: { isValid: false, message: '' }
  },
  reducers: {
    validateTopicState: (state, action) => {
      const topic = action.payload;
      state.topicValidationResult = {
        isValid: topic.trim() !== '',
        message: topic.trim() !== '' ? '' : 'Topic is required.'
      };
    },
    validateRowsState: (state, action) => {
      const rows = action.payload;
      const isValid = rows.every(row => row.trim() !== '');
      state.rowsValidationResult = {
        isValid,
        message: isValid ? '' : 'All items must be filled in.'
      };
    }
  }
});

export const { validateTopicState, validateRowsState } = validateSlice.actions;
export default validateSlice.reducer;
