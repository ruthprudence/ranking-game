// import { createSlice } from '@reduxjs/toolkit';
// import { pairingLogic } from './pairingLogic';

// export const matchupSlice = createSlice({
//   name: 'matchup',
//   initialState: {
//     currentPairIndex: 0,
//     isComparisonComplete: false,
//     pairs: [],
//   },
//   reducers: {
//     startMatchup: (state, action) => {
//       const items = action.payload;
//       state.pairs = pairingLogic(items);
//       console.log("Starting matchup with items:", items);
//       console.log("Generated pairs:", state.pairs);
//       state.currentPairIndex = 0;
//       state.isComparisonComplete = false;
//     },
//     nextPair: (state) => {
//       console.log("Current pair index before update:", state.currentPairIndex);
//       console.log("Pairs:", state.pairs);
//       state.currentPairIndex += 1;
//       console.log("Updated current pair index:", state.currentPairIndex);
//       console.log("New Current Pair:", state.pairs[state.currentPairIndex]);
//     },
//     handleChoiceSelect: (state, action) => {
//       const { choiceIndex, items } = action.payload;

//       if (state.pairs.length > state.currentPairIndex) {
//         const currentPair = state.pairs[state.currentPairIndex];
//         if (currentPair && currentPair.length === 2) {
//           const selectedItem = items[currentPair[choiceIndex]];
          
//           if (selectedItem) {
//             // Assuming that incrementVote can be dispatched from here
//             incrementVote(selectedItem.id);
//             state.currentPairIndex += 1;
//           }
//         }
//       }

//       // Check if the comparison is complete
//       if (state.currentPairIndex >= state.pairs.length) {
//         state.isComparisonComplete = true;
//       }
//     },
//   },
// });

// export const { startMatchup, nextPair, handleChoiceSelect } = matchupSlice.actions;

// export default matchupSlice.reducer;
