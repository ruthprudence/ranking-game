import matchupReducer, { completeMatchup } from '../../../../../src/features/matchup/matchupSlice';

// In your test file
describe('completeMatchup reducer', () => {
    it('should mark comparison as complete and update scores and rankings', () => {
      const initialState = {
        currentPairIndex: 2,
        pairs: [[0, 1], [1, 2]],
        items: [{ id: '1', name: 'Item1', votes: 3 }, { id: '2', name: 'Item2', votes: 2 }],
        isComparisonComplete: false,
        scores: {},
        rankings: []
      };
      const action = completeMatchup();
      const newState = matchupReducer(initialState, action);
      expect(newState.isComparisonComplete).toBe(true);
      expect(Object.keys(newState.scores).length).toBeGreaterThan(0);
      expect(newState.rankings.length).toBeGreaterThan(0);
    });
  });
  