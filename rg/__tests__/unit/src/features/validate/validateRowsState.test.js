import reducer, { validateRowsState } from '../../../../../src/features/validate/validateSlice';

describe('validateRowsState reducer', () => {
  it('should validate rows with no empty entries as true', () => {
    const initialState = {
      areInputsValid: false,
      rowsValidationResult: { isValid: false, message: '' },
      // ... other state properties
    };

    const action = validateRowsState(['Item 1', 'Item 2', 'Item 3']);
    const newState = reducer(initialState, action);

    expect(newState.areInputsValid).toBe(true);
    expect(newState.rowsValidationResult.isValid).toBe(true);
    expect(newState.rowsValidationResult.message).toBe('Items are valid');
  });

  it('should validate rows with any empty entry as false', () => {
    const initialState = {
      areInputsValid: false,
      rowsValidationResult: { isValid: false, message: '' },
      // ... other state properties
    };

    const action = validateRowsState(['Item 1', '', 'Item 3']);
    const newState = reducer(initialState, action);

    expect(newState.areInputsValid).toBe(false);
    expect(newState.rowsValidationResult.isValid).toBe(false);
    expect(newState.rowsValidationResult.message).toBe('All items must be filled in.');
  });
});
