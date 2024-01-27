// Import the necessary actions and reducer
import reducer, { setCurrentPage } from '../../../../../src/features/game/gameSlice';

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
