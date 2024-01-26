// Import the necessary actions and reducer
import reducer, { removeRow } from '../../../../../src/features/ui/uiSlice';
import { MINCHOICES } from '../../../../../src/utils/ui/constants';

  describe('removeRow action', () => {
    it('should handle removeRow by removing the specified row if above min limit', () => {
      const initialState = {
        rows: ['Row 1', 'Row 2', 'Row 3', 'Row 4'],
      };

      const action = removeRow(1); // Remove the second row
      const newState = reducer(initialState, action);

      const expectedRows = ['Row 1', 'Row 3', 'Row 4'];
      expect(newState.rows).toEqual(expectedRows);
    });

    it('should not remove a row if at min limit', () => {
      const initialState = {
        rows: new Array(MINCHOICES).fill('Row'),
        // ... other state properties
      };

      const action = removeRow(0);
      const newState = reducer(initialState, action);

      expect(newState.rows.length).toBe(MINCHOICES);
    });
  });
