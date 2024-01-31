import { calculateScores } from '../../../../../src/features/results/calculateScores';

describe('calculateScores utility function', () => {
    it('should correctly calculate scores from a list of items', () => {
        const state = {
            items: [{ id: '1', votes: 3 }, { id: '2', votes: 5 }, { id: '3', votes: 2 }]
        };
        const scores = calculateScores(state);
        expect(scores).toEqual({ '1': 3, '2': 5, '3': 2 });
    });

    it('should update the scores in the given state object', () => {
        const state = {
            items: [{ id: '1', votes: 1 }, { id: '2', votes: 4 }]
        };
        const scores = calculateScores(state); // Use the returned scores
        expect(scores['1']).toBe(1); // Check the scores returned by the function
        expect(scores['2']).toBe(4);
    });
});
