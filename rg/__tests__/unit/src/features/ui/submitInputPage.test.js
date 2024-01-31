import reducer, { submitInputPage } from '../../../../../src/features/ui/uiSlice';

describe('submitInputPage reducer', () => {
  it('should handle submitInputPage correctly', () => {
    const initialState = {
      rows: ['Item 1', 'Item 2'],
      items: [],
      // ... other state properties
    };

    const action = submitInputPage();
    const newState = reducer(initialState, action);

    expect(newState.items.length).toBe(2);
    // Add more assertions as needed
  });
});
