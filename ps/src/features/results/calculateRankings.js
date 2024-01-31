export const calculateRankings = (items, scores) => {
    if (!scores) {
        return [];
    }

    console.log('Scores:', scores);
    console.log('Items:', items);

    const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    let lastScore = null;
    let rank = 0;

    return sortedChoices.map(([id, score], index) => {
        if (score !== lastScore) {
            rank = index + 1;
            lastScore = score;
        }
        // Use optional chaining to safely access the name property
        const itemName = items.find(item => item.id.toString() === id)?.name || 'Unknown';
        return { itemName, score, rank };
    });
};
