import reducer, { submitBugReport } from '../../../../../src/features/bug/bugSlice';

describe('submitBugReport extraReducers', () => {
  const initialState = {
    isSubmitting: false,
    submitSuccess: false,
    submitError: null,
    // ... other state properties
  };

  it('sets isSubmitting on submitBugReport.pending', () => {
    const action = { type: submitBugReport.pending.type };
    const state = reducer(initialState, action);
    expect(state.isSubmitting).toBe(true);
  });

  it('handles submitBugReport.fulfilled', () => {
    const action = { type: submitBugReport.fulfilled.type, payload: { message: 'Success' } };
    const state = reducer(initialState, action);
    expect(state.isSubmitting).toBe(false);
    expect(state.submitSuccess).toBe(true);
    expect(state.responseMessage).toBe('Success');
  });

  it('handles submitBugReport.rejected', () => {
    const action = { type: submitBugReport.rejected.type, payload: 'Error occurred' };
    const state = reducer(initialState, action);
    expect(state.isSubmitting).toBe(false);
    expect(state.submitError).toBe('Error occurred');
  });
});
