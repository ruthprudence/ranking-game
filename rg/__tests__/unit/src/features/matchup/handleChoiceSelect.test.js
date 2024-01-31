import reducer, { handleChoiceSelect } from '../../../../../src/features/ui/uiSlice';

describe('handleChoiceSelect reducer', () => {
  it('should handle handleChoiceSelect correctly', () => {
    // Adjusted initialState to include items array with IDs and votes
    const initialState = {
      items: [
        { id: 'Item 1', votes: 0 },
        { id: 'Item 2', votes: 0 },
        { id: 'Item 3', votes: 0 },
        { id: 'Item 4', votes: 0 }
      ],
      // Pairs are indices of items in the initialState.items array
      pairs: [[0, 1], [2, 3]],
      currentPairIndex: 0,
      // ... other state properties
    };

    // Adjusted action to simulate user's choice (index of the chosen item in the pair)
    const action = handleChoiceSelect({ choiceIndex: 0, items: initialState.items });
    const newState = reducer(initialState, action);

    // Assertions
    expect(newState.currentPairIndex).toBe(1); // currentPairIndex should increment
    expect(newState.items[0].votes).toBe(1); // votes for the first item should increment
    // ... other assertions
  });
});
