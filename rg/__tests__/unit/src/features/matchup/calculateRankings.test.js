import { calculateRankings } from '../../../../../src/features/results/calculateRankings';

describe('calculateRankings utility function', () => {
    it('should correctly calculate rankings based on votes', () => {
        const items = [
            { id: '1', name: 'Item1', votes: 5 },
            { id: '2', name: 'Item2', votes: 3 },
            { id: '3', name: 'Item3', votes: 3 }
        ];
        const rankings = calculateRankings(items);
        expect(rankings).toEqual([
            { itemName: 'Item1', score: 5, rank: 1 },
            { itemName: 'Item2', score: 3, rank: 2 },
            { itemName: 'Item3', score: 3, rank: 2 }
        ]);
    });

    it('should handle an empty items array', () => {
        const items = [];
        const rankings = calculateRankings(items);
        expect(rankings).toEqual([]);
    });

    it('should correctly assign ranks for ties', () => {
        const items = [
            { id: '1', name: 'Item1', votes: 2 },
            { id: '2', name: 'Item2', votes: 2 },
            { id: '3', name: 'Item3', votes: 1 }
        ];
        const rankings = calculateRankings(items);
        expect(rankings).toEqual([
            { itemName: 'Item1', score: 2, rank: 1 },
            { itemName: 'Item2', score: 2, rank: 1 },
            { itemName: 'Item3', score: 1, rank: 3 }
        ]);
    });
});
