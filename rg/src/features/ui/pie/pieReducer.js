// pieReducer.js

const initialState = {
    totalSlices: 8, // Total number of slices
    filledSlices: 0, // Initial number of filled slices
  };
  
  const pieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SLICE':
        return {
          ...state,
          filledSlices: Math.min(state.filledSlices + 1, state.totalSlices),
        };
      case 'SET_TOTAL_SLICES':
        return {
          ...state,
          totalSlices: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pieReducer;
  