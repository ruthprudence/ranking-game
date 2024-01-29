export const calculateScores = (state) => {
    if (!state || !Array.isArray(state.items)) {
        console.warn('calculateScores: state or state.items is undefined.');
        return {}; // Return an empty object or a default value
    }
    // Check if 'items' exists and is an array
    if (!Array.isArray(state.items)) {
        console.warn('calculateScores: state.items is not an array or is undefined.');
        return {}; // Return an empty object if 'items' is not an array
    }

    // Reduce the 'items' array to a 'scores' object
    const scores = state.items.reduce((acc, item) => {
        // Check if the item has 'id' and 'votes' properties
        if (item && typeof item.id !== 'undefined' && typeof item.votes !== 'undefined') {
            acc[item.id] = item.votes; // Accumulate the scores
        }
        return acc;
    }, {});

    return scores; // Return the calculated scores object
};
