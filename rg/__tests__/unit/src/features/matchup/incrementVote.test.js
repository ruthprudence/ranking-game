import reducer, { incrementVote } from '../../../../../src/features/ui/uiSlice';

describe('incrementVote reducer', () => {
  it('should handle incrementVote correctly', () => {
    const initialState = {
      items: [{ id: 1, votes: 0 }, { id: 2, votes: 0 }],
      // ... other state properties
    };

    const action = incrementVote({ id: 1 });
    const newState = reducer(initialState, action);

    expect(newState.items.find(item => item.id === 1).votes).toBe(1);
  });
});
