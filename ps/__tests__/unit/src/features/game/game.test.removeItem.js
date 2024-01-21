// Import the necessary actions and reducer
import reducer, { removeItem } from '../../../../../src/features/game/gameSlice';

  describe('gameSlice reducer', () => {
    it('should handle removeItem correctly', () => {
      const initialState = {
        items: ['Item 1', 'Item 2', 'Item 3'],
        // ... other state properties
      };
  
      const action = removeItem(1); // Remove the second item
      const newState = reducer(initialState, action);
  
      expect(newState.items).toEqual(['Item 1', 'Item 3']);
    });
  });