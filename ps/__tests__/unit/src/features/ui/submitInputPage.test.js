// Jest unit test for submitInputPage action
jest.mock('../../../../../src/features/validate/validateRows', () => ({
    validateRows: jest.fn()
  }));

  jest.mock('../../../../../src/features/matchup/initializeScores', () => ({
    initializeScores: jest.fn()
  }));
  

// Import the necessary actions and reducer
import reducer, { submitInputPage } from '../../../../../src/features/ui/uiSlice';
import { validateRows } from '../../../../../src/features/validate/validateRows';
import { initializeScores } from '../../../../../src/features/matchup/initializeScores';



describe('uiSlice reducer', () => {
    describe('submitInputPage action', () => {
      it('should handle valid input on submitInputPage', () => {
        validateRows.mockReturnValueOnce(true);
        initializeScores.mockReturnValue({ 'Item 1': 0 });
  
        const initialState = {
          rows: ['Item 1'],
          items: [],
          scores: {},
          isSubmissionFailed: true,
        };
  
        const action = submitInputPage(); // Ensure the payload, if required, is correctly set
        const newState = reducer(initialState, action);
  
        expect(newState.items).toEqual([{ id: expect.any(Number), name: 'Item 1', votes: 0 }]);
        expect(newState.scores).toEqual({ 'Item 1': 0 });
        expect(newState.isSubmissionFailed).toBe(false);
      });

    });
  });
  
      

    it('should handle invalid input on submitInputPage', () => {
        validateRows.mockReturnValueOnce(false); 
      const initialState = {
        rows: [],
        items: [],
        scores: {},
        isSubmissionFailed: false,
        // ... other state properties
      };

      const action = submitInputPage([]);
      const newState = reducer(initialState, action);

      expect(newState.items).toEqual([]);
      expect(newState.scores).toEqual({});
      expect(newState.isSubmissionFailed).toBe(true);
    });