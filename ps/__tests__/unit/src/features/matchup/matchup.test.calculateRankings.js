// Import the default export as the reducer function
import reducer, { calculateRankings } from '../../../../../src/features/matchup/matchupSlice';

describe('matchupSlice reducer', () => {
    it('should calculate rankings correctly', () => {
        const items = [
            { id: 1, name: 'Item 1', votes: 2 },
            { id: 2, name: 'Item 2', votes: 3 }
        ];
        const initialState = {
            items: items,
            scores: { 1: 2, 2: 3 },
            rankings: [],
            // ... other state properties
        };

        const action = calculateRankings();
        const newState = reducer(initialState, action);

        const expectedRankings = [
            { itemName: 'Item 2', score: 3, rank: 1 },
            { itemName: 'Item 1', score: 2, rank: 2 }
        ];
        expect(newState.rankings).toEqual(expectedRankings);
    });
});