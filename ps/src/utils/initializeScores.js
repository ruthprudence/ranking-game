export const initializeScores = (state) => {
    const initialScores = {};
    state.rows.forEach(choice => {
        initialScores[choice.trim()] = 0;
    });
    return state.scores = initialScores;
};