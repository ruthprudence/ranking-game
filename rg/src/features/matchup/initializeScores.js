export const initializeScores = (state) => {
    const initialScores = {};
    state.rows.forEach(choice => {
        initialScores[choice.value.trim()] = 0;
    });
    return initialScores; 
};
