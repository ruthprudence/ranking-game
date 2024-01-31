import reducer, { startMatchup } from '../../../../../src/features/ui/uiSlice';

describe('startMatchup reducer', () => {
  it('should handle startMatchup correctly', () => {
    const initialState = {
      pairs: [],
      // ... other state properties
    };

    const items = [{ id: 1 }, { id: 2 }];
    const action = startMatchup(items);
    const newState = reducer(initialState, action);

    expect(newState.pairs.length).not.toBe(0);
    // Add more assertions based on your pairing logic
  });
});
