export const calculateRankings = (items, scores) => {
    const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    let lastScore = null;
    let rank = 0;
    return sortedChoices.map(([id, score], index) => {
        if (score !== lastScore) {
            rank = index + 1;
            lastScore = score;
        }
        const itemName = items.find(item => item.id.toString() === id).name;
        return [itemName, score, rank];
    });
};
