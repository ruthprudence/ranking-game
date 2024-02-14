// pieReducer.js

const initialState = {
    totalSlices: 0, // Total number of slices
    filledSlices: 0, // Initial number of filled slices
  };
  
  const pieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SLICE':
        if (state.filledSlices < state.totalSlices) {
          return {
            ...state,
            filledSlices: state.filledSlices + 1,
          };
        }
        return state;
  
      case 'SET_TOTAL_SLICES':
        return {
          ...state,
          totalSlices: action.payload.length, // Set total slices to the length of pairs
        };
  
      default:
        return state;
    }
  };
  
  export default pieReducer;
  