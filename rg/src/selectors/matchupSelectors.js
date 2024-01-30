export const selectCurrentPair = (state) => {
  return state.matchup.pairs[state.matchup.currentPairIndex];
};

  
  export const selectInitialScores = (state) => {
    const initialScores = {};
    state.matchup.rows.forEach(choice => {
      initialScores[choice.trim()] = 0;
    });
    return initialScores;
  };
  
  export const selectSortedPriorities = (state) => {
    return Object.keys(state.matchup.scores).sort((a, b) => state.matchup.scores[b] - state.matchup.scores[a]);
  };
  
  export const selectAdjustedRankings = (state) => {
    const sortedChoices = Object.entries(state.matchup.scores).sort((a, b) => b[1] - a[1]);
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
    return pair ? [state.matchup.items[pair[0]], state.matchup.items[pair[1]]] : null;
  };
  