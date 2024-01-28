import { createSlice } from '@reduxjs/toolkit';
import { validateTopic } from './validateTopic'; // This imports validateTopic
import { validateRows } from './validateRows'; // Update this path as per actual location of validateRows

export const validateSlice = createSlice({
  name: 'validate',
  initialState: {
    topicValidationResult: null,
    rowsValidationResult: null
  },
  reducers: {
    validateTopicState: (state, action) => {
      const result = validateTopic(action.payload);
      state.topicValidationResult = {
        isValid: result.isValid,
        message: result.message
      };
    },
    validateRowsState: (state, action) => {
      const result = validateRows(action.payload);
      state.rowsValidationResult = {
        isValid: result.isValid,
        message: result.message
      };
    }
  }
});

export const { validateTopicState, validateRowsState } = validateSlice.actions;
export default validateSlice.reducer;
