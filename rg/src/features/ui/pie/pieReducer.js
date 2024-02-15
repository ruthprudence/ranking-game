// pieReducer.js

const initialState = {
    totalSlices: 0, // Total number of slices
    filledSlices: 0, // Initial number of filled slices
  };
  
  const pieReducer = (state = initialState, action) => {
    // console.log('Pie Reducer Action:', action); // Log the action received
  
    switch (action.type) {
      case 'ADD_SLICE':
        console.log('Current filledSlices:', state.filledSlices); // Log current filledSlices
  
        if (state.filledSlices < state.totalSlices) {
          const updatedFilledSlices = state.filledSlices + 1;
          console.log('Incrementing filledSlices to:', updatedFilledSlices); // Log the incremented value
  
          return {
            ...state,
            filledSlices: updatedFilledSlices,
          };
        } else {
          console.log('filledSlices reached maximum limit:', state.filledSlices);
        }
        return state;
  
      case 'SET_TOTAL_SLICES':
        console.log('Setting totalSlices to:', action.payload.length); // Log the payload length
  
        return {
          ...state,
          totalSlices: action.payload.length, // Set total slices to the length of pairs
        };
    case 'RESET_PIE':
        console.log('Resetting pie state to initial state');
        return { ...initialState, totalSlices: 0, filledSlices: 0  };
      default:
        return state;
    }
  };
  
  export default pieReducer;
  