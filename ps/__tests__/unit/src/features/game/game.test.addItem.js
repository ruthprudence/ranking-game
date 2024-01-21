// Import the necessary actions and reducer
import reducer, { addItem } from '../../../../../src/features/game/gameSlice';

  describe('gameSlice reducer', () => {
    it('should handle addItem correctly', () => {
      const initialState = {
        items: ['Item 1', 'Item 2'],
        // ... other state properties
      };
  
      const action = addItem();
      const newState = reducer(initialState, action);
  
      expect(newState.items.length).toBe(3);
      expect(newState.items[2]).toBe('');
    });
  });
