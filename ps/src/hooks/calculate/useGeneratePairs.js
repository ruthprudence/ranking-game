// useGeneratePairs.js
const generatePairs = (numItems = 0) => {
    if (!numItems || numItems < 2) {
        return [];
    }

    const pairs = [];
    for (let start = 1; start < numItems; start++) {
        for (let row = start, col = 0; row < numItems; row++, col++) {
            pairs.push([row, col]);
        }
    }

    return pairs;
};

export default generatePairs;
