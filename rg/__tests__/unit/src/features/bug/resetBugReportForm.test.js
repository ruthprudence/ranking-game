import reducer, { resetBugReportForm } from '../../../../../src/features/bug/bugSlice';

describe('resetBugReportForm reducer', () => {
  it('should reset the bug report form', () => {
    const initialState = {
      description: 'Some description',
      stepsToReproduce: 'Some steps',
      contactEmail: 'test@example.com',
      // ... other state properties
    };
    const action = resetBugReportForm();
    const newState = reducer(initialState, action);

    expect(newState).toEqual(reducer(undefined, {}));
  });
});
