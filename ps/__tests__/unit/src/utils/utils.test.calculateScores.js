import { calculateScores } from '../../../../src/utils/calculateScores';

describe('calculateScores utility function', () => {
    it('should correctly calculate scores from a list of items', () => {
        const state = {
            items: [
                { id: '1', votes: 3 },
                { id: '2', votes: 5 },
                { id: '3', votes: 2 }
            ]
        };
        calculateScores(state);
        expect(state.scores).toEqual({ '1': 3, '2': 5, '3': 2 });
    });
    

    it('should handle an empty list of items', () => {
        const state = {
            items: [],
            scores: {}
        };
        calculateScores(state);
        expect(state.scores).toEqual({});
    });

    it('should update the scores in the given state object', () => {
        const state = {
            items: [
                { id: '1', votes: 1 },
                { id: '2', votes: 4 }
            ],
            scores: {}
        };
        calculateScores(state);
        expect(state.scores['1']).toBe(1);
        expect(state.scores['2']).toBe(4);
    });
});
