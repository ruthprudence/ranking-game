export const calculateScores = (items) => {
    return items.reduce((acc, item) => {
        acc[item.id] = item.votes;
        return acc;
    }, {});
};
