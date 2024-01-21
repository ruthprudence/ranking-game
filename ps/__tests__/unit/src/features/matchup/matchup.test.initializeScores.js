// Import the default export as the reducer function
import reducer, { initializeScores } from '../../../../../src/features/matchup/matchupSlice';

describe('matchupSlice reducer', () => {
    it('should initialize scores correctly', () => {
        const initialState = {
            rows: ['Item 1', 'Item 2', 'Item 3'],
            scores: {},
            // ... other state properties
        };

        const action = initializeScores();
        const newState = reducer(initialState, action);

        expect(newState.scores).toEqual({ 'Item 1': 0, 'Item 2': 0, 'Item 3': 0 });
    });
});
