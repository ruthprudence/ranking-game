// Import the necessary actions and reducer
import reducer, { setTopic } from '../../../../../src/features/ui/uiSlice';

describe('gameSlice reducer', () => {
    it('should handle setTopic correctly', () => {
      const initialState = {
        topic: '',
        // ... other state properties
      };
  
      const action = setTopic('Animals');
      const newState = reducer(initialState, action);
  
      expect(newState.topic).toBe('Animals');
    });
  });
