// generatePairs.js
export const generatePairs = (numItems) => {
    if (!numItems || numItems < 2) {
        return [];
    }

    const pairs = [];
    for (let i = 0; i < numItems; i++) {
        for (let j = i + 1; j < numItems; j++) {
            pairs.push([i, j]);
        }
    }
    if (!pairs) {
        return [];
    }
    return pairs;
};