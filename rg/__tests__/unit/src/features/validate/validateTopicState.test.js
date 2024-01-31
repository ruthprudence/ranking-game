import reducer, { validateTopicState } from '../../../../../src/features/validate/validateSlice';

describe('validateTopicState reducer', () => {
  it('should validate non-empty topic as true', () => {
    const initialState = {
      isTopicValid: false,
      topicValidationResult: { isValid: false, message: '' },
      // ... other state properties
    };

    const action = validateTopicState('Valid Topic');
    const newState = reducer(initialState, action);

    expect(newState.isTopicValid).toBe(true);
    expect(newState.topicValidationResult.isValid).toBe(true);
    expect(newState.topicValidationResult.message).toBe('');
  });

  it('should validate empty topic as false', () => {
    const initialState = {
      isTopicValid: false,
      topicValidationResult: { isValid: false, message: '' },
      // ... other state properties
    };

    const action = validateTopicState('');
    const newState = reducer(initialState, action);

    expect(newState.isTopicValid).toBe(false);
    expect(newState.topicValidationResult.isValid).toBe(false);
    expect(newState.topicValidationResult.message).toBe('Topic is required.');
  });
});
