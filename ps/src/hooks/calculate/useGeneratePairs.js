// import console from 'console';
// useGeneratePairs.js
const generatePairs = (numItems = 0) => {
        console.log('numItems:', numItems);
        if (!numItems || numItems < 2) {
            return [];
        }

        const pairs = [];
        for (let i = 0; i < numItems; i++) {
            for (let j = i + 1; j < numItems; j++) {
                pairs.push([i, j]);
            }
        }
        console.log('Pairs:', pairs);
        return pairs;

};

export default generatePairs;