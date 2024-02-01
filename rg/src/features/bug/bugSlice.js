import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for submitting bug report (optional)
export const submitBugReport = createAsyncThunk(
    'bugs/submitBugReport',
    async (bugData, { rejectWithValue }) => {
        try {
            // API call to submit bug data
            const response = await fetch('/api/bug-report', {
                method: 'POST',
                body: JSON.stringify(bugData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) throw new Error('Failed to submit bug report');
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
            .addCase(submitBugReport.fulfilled, (state) => {
                state.isSubmitting = false;
                state.submitSuccess = true;
                // Optionally reset form here
            })
            .addCase(submitBugReport.rejected, (state, action) => {
                state.isSubmitting = false;
                state.submitError = action.payload;
            });
    },
});

export const { updateDescription, resetBugReportForm } = bugSlice.actions;

export default bugSlice.reducer;
