import reducer, { submitTopic } from '../../../../../src/features/ui/uiSlice';

describe('submitTopic reducer', () => {
  it('should handle submitTopic correctly', () => {
    const initialState = {
      topic: '',
      // ... other state properties
    };

    const topic = 'New Topic';
    const action = submitTopic(topic);
    const newState = reducer(initialState, action);

    expect(newState.topic).toBe(topic);
  });
});
