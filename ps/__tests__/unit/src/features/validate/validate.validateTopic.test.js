import { submitTopic } from '../../../../../src/features/actions'; 
import { validateTopic } from '../../../../../src/utils/validate/validateTopic'; 

jest.mock('../../../../../src/features/actions', () => ({
  submitTopic: jest.fn().mockImplementation(topic => ({ type: 'ui/submitTopic', payload: topic }))
}));

describe('validateTopic async thunk', () => {
  let dispatch, getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    submitTopic.mockClear();
  });

  it('should dispatch submitTopic for a valid topic', async () => {
    const validTopic = "Valid Topic";
    const thunk = validateTopic(validTopic);
    await thunk(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ui/submitTopic',
      payload: validTopic
    });
  });

  it('should not dispatch submitTopic for an empty topic', async () => {
    const invalidTopic = "";
    const thunk = validateTopic(invalidTopic);
    await thunk(dispatch, getState, undefined);

    // Check if submitTopic was not dispatched
    expect(dispatch).not.toHaveBeenCalledWith({
      type: 'ui/submitTopic',
      payload: invalidTopic
    });
  });
});
