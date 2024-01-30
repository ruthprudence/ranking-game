export const calculateRankings = (items, scores) => {
    // Attach scores to items and sort them based on these scores
    const itemsWithScores = items.map(item => ({
        ...item,
        score: scores[item.id] || 0  // Default to 0 if no score is found
    }));

    const sortedItems = itemsWithScores.sort((a, b) => b.score - a.score);
    let lastScore = null;
    let rank = 0;
    let tieRank = 0;

    return sortedItems.map((item, index) => {
        if (item.score !== lastScore) {
            rank = index + 1;
            tieRank = rank;
            lastScore = item.score;
        } else {
            rank = tieRank; // Keep the same rank in case of a tie
        }
        return { itemName: item.name, score: item.score, rank };
    });
};
