export const calculateScores = (state) => {
    const scores = state.items.reduce((acc, item) => {
        acc[item.id] = item.votes;
        return acc;
    }, {});
    state.scores = scores;
};