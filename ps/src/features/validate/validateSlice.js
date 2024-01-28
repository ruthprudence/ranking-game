import { createSlice } from '@reduxjs/toolkit';

export const validateSlice = createSlice({
  name: 'validate',
  initialState: {
    isTopicValid: false,
    areInputsValid: false,
    topicValidationResult: { isValid: false, message: '' },
    rowsValidationResult: { isValid: false, message: '' }
  },
  reducers: {
    validateTopicState: (state, action) => {
      const topic = action.payload;
      const isValid = topic.trim() !== '';
      state.isTopicValid = isValid; // Update the isTopicValid state directly
      state.topicValidationResult = {
        isValid,
        message: isValid ? '' : 'Topic is required.'
      };
    },
    validateRowsState: (state, action) => {
      const rows = action.payload;
      const isValid = rows.every(row => row.trim() !== '');
      state.areInputsValid = isValid; // Update the areInputsValid state directly
      state.rowsValidationResult = {
        isValid,
        message: isValid ? 'Items are valid' : 'All items must be filled in.'
      };
    }
  }
});

export const { validateTopicState, validateRowsState } = validateSlice.actions;
export default validateSlice.reducer;
