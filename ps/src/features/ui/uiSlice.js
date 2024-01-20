// src/features/ui/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'items',
  initialState: {
    rows: ['', '', ''],
    items: [],
    value: '',
  },
  reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    },
    setTopic: (state, action) => {
        state.topic = action.payload;
    },
     
}
});

export const {  } = uiSlice.actions;
export default uiSlice.reducer;