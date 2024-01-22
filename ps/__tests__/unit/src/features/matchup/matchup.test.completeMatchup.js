import matchupReducer, { completeMatchup } from '../../../../../src/features/matchup/matchupSlice';

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

    it('should not update scores or rankings if comparison is not complete', () => {
        const initialState = {
            currentPairIndex: 1,
            pairs: [[0, 1], [1, 2]],
            items: [{ id: '1', name: 'Item1', votes: 3 }, { id: '2', name: 'Item2', votes: 2 }],
            isComparisonComplete: false,
            scores: {},
            rankings: []
        };
        const action = completeMatchup();
        const newState = matchupReducer(initialState, action);
        expect(newState.isComparisonComplete).toBe(false);
        expect(newState.scores).toEqual({});
        expect(newState.rankings).toEqual([]);
    });
});
