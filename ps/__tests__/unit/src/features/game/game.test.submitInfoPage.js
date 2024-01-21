// Import the necessary actions and reducer
import reducer, { submitInputPage } from '../../../../../src/features/game/gameSlice';

describe('gameSlice reducer', () => {
    it('should transform rows into items correctly with submitInputPage action', () => {
      // Example rows
      const rows = ['Item 1', 'Item 2', 'Item 3'];
  
      // Expected items
      const expectedItems = [
        { id: 0, name: 'Item 1', votes: 0 },
        { id: 1, name: 'Item 2', votes: 0 },
        { id: 2, name: 'Item 3', votes: 0 },
      ];
  
      // Create initial state
      const initialState = {
        rows: rows,
        items: [],
        currentPage: 'INPUT_PAGE',
        // ... other state properties
      };
  
      // Dispatch the action
      const action = submitInputPage(rows);
      const newState = reducer(initialState, action);
  
      // Check if items are transformed correctly
      expect(newState.items).toEqual(expectedItems);
    });
  });