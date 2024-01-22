export const calculateScores = (state) => {
    if (!state.items) {
        // handle the case where items are undefined or not an array
        return {};
    }
    const scores = state.items.reduce((acc, item) => {
        acc[item.id] = item.votes;
        return acc;
    }, {});
    return scores;
};
