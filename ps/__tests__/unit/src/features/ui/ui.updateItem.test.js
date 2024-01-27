// Import the necessary actions and reducer
import reducer, { updateItem } from '../../../../../src/features/ui/uiSlice';

  describe('gameSlice reducer', () => {
    it('should handle updateItem correctly', () => {
      const initialState = {
        items: ['Item 1', 'Item 2'],
        // ... other state properties
      };
  
      const action = updateItem({ index: 1, value: 'Updated Item 2' });
      const newState = reducer(initialState, action);
  
      expect(newState.items[1]).toBe('Updated Item 2');
    });
  });
