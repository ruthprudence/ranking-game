// Import the necessary actions and reducer
import reducer, { addRow } from '../../../../../src/features/ui/uiSlice';
import { MAXCHOICES } from '../../../../../src/utils/ui/constants';

describe('uiSlice reducer', () => {
  describe('addRow action', () => {
    it('should handle addRow by adding a row if under max limit', () => {
      const initialState = {
        rows: ['Row 1', 'Row 2'],
        // ... other state properties
      };

      const action = addRow();
      const newState = reducer(initialState, action);

      expect(newState.rows.length).toBe(3);
      expect(newState.rows[2]).toBe('');
    });

    it('should not add a row if at max limit', () => {
      const initialState = {
        rows: new Array(MAXCHOICES).fill('Row'),
        // ... other state properties
      };

      const action = addRow();
      const newState = reducer(initialState, action);

      expect(newState.rows.length).toBe(MAXCHOICES);
    });
  });
});
