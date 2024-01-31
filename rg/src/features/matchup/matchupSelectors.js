export const incrementVote = (state, action) => {
  const selectedItem = action.payload;
  const itemIndex = state.items.findIndex(item => item.id === selectedItem.id);
  if (itemIndex !== -1) {
    state.items[itemIndex].votes += 1;
  }
};


export const selectCurrentPair = (state) => {
  return state.ui.pairs[state.ui.currentPairIndex];
};

  
  export const selectInitialScores = (state) => {
    const initialScores = {};
    state.matchup.rows.forEach(choice => {
      initialScores[choice.trim()] = 0;
    });
    return initialScores;
  };
  
  export const selectSortedPriorities = (state) => {
    return Object.keys(state.matchup.scores).sort((a, b) => state.ui.scores[b] - state.ui.scores[a]);
  };
  
  export const selectAdjustedRankings = (state) => {
    const sortedChoices = Object.entries(state.ui.scores).sort((a, b) => b[1] - a[1]);
    let lastScore = null, rank = 0;
    return sortedChoices.map(([choice, score], index) => {
      if (score !== lastScore) {
        rank = index + 1;
        lastScore = score;
      }
      return [choice, score, rank];
    });
  };

  export const selectCurrentPairItems = (state) => {
    const pair = selectCurrentPair(state);
    return pair ? [state.ui.items[pair[0]], state.ui.items[pair[1]]] : null;
  };
  