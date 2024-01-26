import { initializeScores } from '../../../../src/utils/matchup/initializeScores';

describe('initializeScores utility function', () => {
    it('should initialize scores for each row in the state', () => {
        const state = {
            rows: ['Item 1', 'Item 2', 'Item 3'],
            scores: {}
        };
        initializeScores(state);
        expect(state.scores).toEqual({ 'Item 1': 0, 'Item 2': 0, 'Item 3': 0 });
    });

    it('should handle empty rows', () => {
        const state = {
            rows: [],
            scores: {}
        };
        initializeScores(state);
        expect(state.scores).toEqual({});
    });

    it('should trim spaces in row names before initializing scores', () => {
        const state = {
            rows: ['  Item 1  ', 'Item2', ' Item 3 '],
            scores: {}
        };
        initializeScores(state);
        expect(state.scores).toEqual({ 'Item 1': 0, 'Item2': 0, 'Item 3': 0 });
    });
});
