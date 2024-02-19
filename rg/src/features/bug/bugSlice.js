import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for submitting bug report
export const submitBugReport = createAsyncThunk(
    'bugs/submitBugReport',
    async (bugData, { rejectWithValue }) => {
        try {
            // API call to submit bug data
            const response = await fetch('http://api.ruthprudence.com:8011/api/bug-report', {
                method: 'POST',
                body: JSON.stringify(bugData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Check if the response is ok
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit bug report');
            }

            // Parse and return the response data
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    description: '',
    stepsToReproduce: '',
    contactEmail: '',
    isSubmitting: false,
    submitSuccess: false,
    submitError: null,
};

export const bugSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        updateDescription: (state, action) => {
            state.description = action.payload;
        },
        // ... other reducers for updating form fields
        resetBugReportForm: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitBugReport.pending, (state) => {
                state.isSubmitting = true;
            })
            .addCase(submitBugReport.fulfilled, (state, action) => {
                state.isSubmitting = false;
                state.submitSuccess = true;
                state.submitError = null;
                state.responseMessage = action.payload.message; // Store success message from response
            })
            .addCase(submitBugReport.rejected, (state, action) => {
                state.isSubmitting = false;
                state.submitError = action.payload; // Store error message
            });
    },
});

export const { updateDescription, resetBugReportForm } = bugSlice.actions;

export default bugSlice.reducer;
