import { useState, useEffect } from 'react';

const usePairGenerator = (numItems = 0) => {
    const [pairs, setPairs] = useState([]);

    useEffect(() => {
        const generatePairs = () => {
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

        setPairs(generatePairs());
    }, [numItems]);

    return { pairs };
};

export default usePairGenerator;