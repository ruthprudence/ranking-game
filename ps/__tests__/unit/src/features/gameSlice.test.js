// Import the necessary actions and reducer
import reducer, { setCurrentPage, setTopic, addItem, updateItem, removeItem } from '../../../../src/features/game/gameSlice';

describe('gameSlice reducer', () => {
  it('should handle setCurrentPage correctly', () => {
    const initialState = {
      currentPage: 'SPLASH_PAGE',
      // ... other state properties
    };

    const action = setCurrentPage('MATCHUP_PAGE');
    const newState = reducer(initialState, action);

    expect(newState.currentPage).toBe('MATCHUP_PAGE');
  });
});

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

  describe('gameSlice reducer', () => {
    it('should handle addItem correctly', () => {
      const initialState = {
        items: ['Item 1', 'Item 2'],
        // ... other state properties
      };
  
      const action = addItem();
      const newState = reducer(initialState, action);
  
      expect(newState.items.length).toBe(3);
      expect(newState.items[2]).toBe('');
    });
  });

  describe('gameSlice reducer', () => {
    it('should handle updateItem correctly', () => {
      const initialState = {
        items: ['Item 1', 'Item 2'],
        // ... other state properties
      };
  
      const action = updateItem({ index: 1, value: 'Updated Item 2' });
      const newState = reducer(initialState, action);
  
      expect(newState.items[1]).toBe('Updated Item 2');
    });
  });

  describe('gameSlice reducer', () => {
    it('should handle removeItem correctly', () => {
      const initialState = {
        items: ['Item 1', 'Item 2', 'Item 3'],
        // ... other state properties
      };
  
      const action = removeItem(1); // Remove the second item
      const newState = reducer(initialState, action);
  
      expect(newState.items).toEqual(['Item 1', 'Item 3']);
    });
  });