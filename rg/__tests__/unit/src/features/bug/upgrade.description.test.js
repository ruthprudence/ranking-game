import reducer, { updateDescription } from '../../../../../src/features/bug/bugSlice';

describe('updateDescription reducer', () => {
  it('should handle updateDescription', () => {
    const initialState = {
      description: '',
      // ... other state properties
    };
    const newDescription = 'New bug description';
    const action = updateDescription(newDescription);
    const newState = reducer(initialState, action);

    expect(newState.description).toBe(newDescription);
  });
});
