// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        currentPage: 'SPLASH_PAGE',
        topic: '',
        rows: ['', '', ''],
        items: [],
        value: '',
      },
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        submitTopic: (state, action) => {
            const topic = action.payload;
            if (!topic.trim()) {
                // Handle error. You might want to handle this differently than an alert.
                return;
            }
            state.topic = topic;
            state.currentPage = 'INPUT_PAGE';
        },
        // other reducers
    },
    // other configurations
});

export const { setTopic, setCurrentPage, submitTopic } = uiSlice.actions;
export default uiSlice.reducer;
