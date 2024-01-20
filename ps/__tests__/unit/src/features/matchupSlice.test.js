// Import the default export as the reducer function
import reducer, { generatePairs, selectChoice, calculateScores, calculateRankings, initializeScores } from '../../../../src/features/matchup/matchupSlice';

describe('matchupSlice reducer', () => {
  it('should generate correct pairs for given items', () => {
    // Example items
    const items = [{ id: 0, name: 'Item 1' }, { id: 1, name: 'Item 2' }, { id: 2, name: 'Item 3' }];

    // Expected pairs
    const expectedPairs = [[1, 0], [2, 1], [2, 0]];

    // Create an initial state
    const initialState = {
      items: items,
      pairs: [],
      // ... other state properties
    };

    // Dispatch the action
    const action = generatePairs();
    const newState = reducer(initialState, action);

    // Check if pairs are as expected
    expect(newState.pairs).toEqual(expectedPairs);
  });
});

describe('matchupSlice reducer', () => {
    it('should handle a choice selection correctly', () => {
      // Example items and initial state
      const items = [
        { id: 0, name: 'Item 1', votes: 0 },
        { id: 1, name: 'Item 2', votes: 0 }
      ];
      const pairs = [[0, 1]];
      const initialState = {
        items: items,
        currentPairIndex: 0,
        isComparisonComplete: false,
        pairs: pairs,
        // ... other state properties
      };
  
      // Dispatch the action with the selected choice
      const selectedChoice = 'Item 1';
      const action = selectChoice(selectedChoice);
      const newState = reducer(initialState, action);
  
      // Check if the votes for the selected item are incremented
      expect(newState.items[0].votes).toBe(1);
      // Check if the currentPairIndex is incremented or comparison is marked complete
      expect(newState.isComparisonComplete).toBe(true);
    });
  });

  describe('matchupSlice reducer', () => {
    it('should calculate scores correctly', () => {
      // Example items and initial state
      const items = [
        { id: 1, name: 'Item 1', votes: 2 },
        { id: 2, name: 'Item 2', votes: 3 }
      ];
      const initialState = {
        items: items,
        scores: {},
        // ... other state properties
      };
  
      // Dispatch the action
      const action = calculateScores();
      const newState = reducer(initialState, action);
  
      // Check if scores are calculated correctly
      expect(newState.scores).toEqual({ 1: 2, 2: 3 });
    });
  });

  describe('matchupSlice reducer', () => {
    it('should calculate rankings correctly', () => {
      // Example state
      const items = [
        { id: 1, name: 'Item 1', votes: 2 },
        { id: 2, name: 'Item 2', votes: 3 }
      ];
      const initialState = {
        items: items,
        scores: { 1: 2, 2: 3 },
        rankings: [],
        // ... other state properties
      };
  
      // Dispatch the action
      const action = calculateRankings();
      const newState = reducer(initialState, action);
  
      // Check if rankings are calculated correctly
      const expectedRankings = [
        { itemName: 'Item 2', score: 3, rank: 1 },
        { itemName: 'Item 1', score: 2, rank: 2 }
      ];
      expect(newState.rankings).toEqual(expectedRankings);
    });
  });

  describe('matchupSlice reducer', () => {
    it('should initialize scores correctly', () => {
      // Example initial state
      const initialState = {
        rows: ['Item 1', 'Item 2', 'Item 3'],
        scores: {},
        // ... other state properties
      };
  
      // Dispatch the action
      const action = initializeScores();
      const newState = reducer(initialState, action);
  
      // Check if scores are initialized correctly
      expect(newState.scores).toEqual({ 'Item 1': 0, 'Item 2': 0, 'Item 3': 0 });
    });
  });