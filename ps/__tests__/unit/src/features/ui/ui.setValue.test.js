// Import the necessary actions and reducer
import reducer, { setValue } from '../../../../../src/features/ui/uiSlice';

describe('uiSlice reducer', () => {
  describe('setValue action', () => {
    it('should handle setValue by updating the value', () => {
      const initialState = {
        value: '',
        // ... other state properties
      };

      const action = setValue('New Value');
      const newState = reducer(initialState, action);

      expect(newState.value).toBe('New Value');
    });
  });
});
