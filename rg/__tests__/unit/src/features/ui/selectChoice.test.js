import reducer, { selectChoice } from '../../../../../src/features/ui/uiSlice';

describe('selectChoice reducer', () => {
  it('should handle selectChoice correctly', () => {
    const initialState = {
      items: [{ name: 'Item 1', votes: 0 }, { name: 'Item 2', votes: 0 }],
      // ... other state properties
    };

    const action = selectChoice('Item 1');
    const newState = reducer(initialState, action);

    expect(newState.items[0].votes).toBe(1);
  });
});
