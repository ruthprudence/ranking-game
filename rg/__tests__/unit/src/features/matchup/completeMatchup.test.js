import reducer, { completeMatchup } from '../../../../../src/features/ui/uiSlice';

describe('completeMatchup reducer', () => {
  it('should handle completeMatchup correctly', () => {
    const initialState = {
      items: [{ id: 1, votes: 3 }, { id: 2, votes: 5 }],
      rankings: [],
      // ... other state properties
    };

    const action = completeMatchup();
    const newState = reducer(initialState, action);

    expect(newState.rankings.length).toBe(2);
    // Add more assertions based on the calculateRankings logic
  });
});
