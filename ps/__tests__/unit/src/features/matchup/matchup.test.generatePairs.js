// Import the default export as the reducer function
import reducer, { generatePairs } from '../../../../../src/features/matchup/matchupSlice';

describe('matchupSlice reducer', () => {
    it('should generate correct pairs with generatePairs action', () => {
      // Example items
      const items = [
        { id: 0, name: 'Item 1', votes: 0 },
        { id: 1, name: 'Item 2', votes: 0 },
        { id: 2, name: 'Item 3', votes: 0 },
      ];
  
      // Expected pairs
      const expectedPairs = [
        [1, 0],
        [2, 0],
        [2, 1],
      ];
  
      // Create initial state
      const initialState = {
        items: items,
        pairs: [],
        // ... other state properties
      };
  
      // Dispatch the action
      const action = generatePairs();
      const newState = reducer(initialState, action);
  
      // Check if pairs are generated correctly
      expect(newState.pairs).toEqual(expectedPairs);
    });
  });
