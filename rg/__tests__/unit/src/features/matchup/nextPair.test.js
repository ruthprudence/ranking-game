import reducer, { nextPair } from '../../../../../src/features/ui/uiSlice';

describe('nextPair reducer', () => {
  it('should handle nextPair correctly', () => {
    const initialState = {
      currentPairIndex: 0,
      pairs: [['Item 1', 'Item 2'], ['Item 3', 'Item 4']],
      // ... other state properties
    };

    const action = nextPair();
    const newState = reducer(initialState, action);

    expect(newState.currentPairIndex).toBe(1);
  });
});
