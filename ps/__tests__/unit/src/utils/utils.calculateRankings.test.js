import { calculateRankings } from '../../../../src/utils/matchup/calculateRankings';

describe('calculateRankings utility function', () => {
    it('should correctly calculate rankings from scores', () => {
        const state = {
            scores: { '1': 5, '2': 3, '3': 3 },
            items: [
                { id: '1', name: 'Item1' },
                { id: '2', name: 'Item2' },
                { id: '3', name: 'Item3' }
            ],
        };
        const rankings = calculateRankings(state); // Using the returned value
        expect(rankings).toEqual([
            { itemName: 'Item1', score: 5, rank: 1 },
            { itemName: 'Item2', score: 3, rank: 2 },
            { itemName: 'Item3', score: 3, rank: 2 }
        ]);
    });

    it('should handle an empty scores object', () => {
        const state = {
            scores: {},
            items: [],
        };
        const rankings = calculateRankings(state); // Using the returned value
        expect(rankings).toEqual([]);
    });

    it('should correctly assign ranks for ties', () => {
        const state = {
            scores: { '1': 2, '2': 2, '3': 1 },
            items: [
                { id: '1', name: 'Item1' },
                { id: '2', name: 'Item2' },
                { id: '3', name: 'Item3' }
            ],
        };
        const rankings = calculateRankings(state); // Using the returned value
        expect(rankings).toEqual([
            { itemName: 'Item1', score: 2, rank: 1 },
            { itemName: 'Item2', score: 2, rank: 1 },
            { itemName: 'Item3', score: 1, rank: 3 }
        ]);
    });
});
