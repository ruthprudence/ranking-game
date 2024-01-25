// Import the necessary actions and reducer
import reducer, { updateRow } from '../../../../../src/features/ui/uiSlice';

describe('uiSlice reducer', () => {
  describe('updateRow action', () => {
    it('should handle updateRow by updating the specified row', () => {
      const initialState = {
        rows: ['Row 1', 'Row 2', 'Row 3'],
        // ... other state properties
      };

      const action = updateRow({ index: 1, updatedValue: 'Updated Row 2' });
      const newState = reducer(initialState, action);

      expect(newState.rows[1]).toBe('Updated Row 2');
    });

    it('should not update a row if index is out of bounds', () => {
      const initialState = {
        rows: ['Row 1', 'Row 2', 'Row 3'],
        // ... other state properties
      };

      const action = updateRow({ index: 9, updatedValue: 'New Row' });
      const newState = reducer(initialState, action);

      expect(newState.rows).toEqual(initialState.rows); // unchanged
    });
  });
});
