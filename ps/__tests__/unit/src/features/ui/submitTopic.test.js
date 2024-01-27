// Import the necessary actions and reducer
import reducer, { submitTopic } from '../../../../../src/features/ui/uiSlice';
global.alert = jest.fn();


describe('uiSlice reducer', () => {
  describe('submitTopic action', () => {
    it('should handle submitTopic correctly with valid topic', () => {
      const initialState = {
        topic: '',
        isSubmissionSuccessful: false,
        // ... other state properties
      };

      const action = submitTopic('Sports');
      const newState = reducer(initialState, action);

      expect(newState.topic).toBe('Sports');
      expect(newState.isSubmissionSuccessful).toBe(true);
    });

    it('should handle submitTopic with empty topic', () => {
      const initialState = {
        topic: '',
        isSubmissionSuccessful: true,
        // ... other state properties
      };

      const action = submitTopic('');
      const newState = reducer(initialState, action);

      expect(newState.topic).toBe('');
      expect(newState.isSubmissionSuccessful).toBe(false);
    });
  });
});
