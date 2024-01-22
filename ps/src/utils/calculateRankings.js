export const calculateRankings = (state) => {
    if (!state.scores) {
        // Handle undefined scores
        return [];
    }
    const sortedChoices = Object.entries(state.scores).sort((a, b) => b[1] - a[1]);
    let lastScore = null;
    let rank = 0;
    const rankings = sortedChoices.map(([id, score], index) => {
        if (score !== lastScore) {
            rank = index + 1;
            lastScore = score;
        }
        const itemName = state.items.find(item => item.id.toString() === id).name;
        return { itemName, score, rank };
    });
    state.rankings = rankings;
};