export const calculateScores = (state) => {
    const scores = state.items.reduce((acc, item) => {
        acc[item.id] = item.votes;
        return acc;
    }, {});
    return scores; // Ensure this line returns the scores object
};
