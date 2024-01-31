import reducer, { setItems } from '../../../../../src/features/ui/uiSlice';

describe('setItems reducer', () => {
  it('should handle setItems correctly', () => {
    const initialState = {
      items: [],
      // ... other state properties
    };

    const newItems = ['Item A', 'Item B', 'Item C'];
    const action = setItems(newItems);
    const newState = reducer(initialState, action);

    expect(newState.items).toEqual(newItems);
  });
});
