// useGeneratePairs.js
const generatePairs = (numItems = 0) => {
    if (!numItems || numItems < 2) {
        return [];
    }

    const pairs = [];

    // Generate all possible pairs
    for (let i = 0; i < numItems; i++) {
        for (let j = 0; j < i; j++) {
            pairs.push([i, j]);
        }
    }

    // Reorder pairs to follow the snaking pattern
    const snakedPairs = [];
    let start = 0;
    let end = 0;

    for (let i = 0; i < numItems - 1; i++) {
        end += i + 1;
        let currentPairs = pairs.slice(start, end);

        if (i % 2 === 0) {
            // Reverse the order for even rows
            currentPairs = currentPairs.reverse();
        }

        snakedPairs.push(...currentPairs);
        start = end;
    }

    return snakedPairs;
};

export default generatePairs;
