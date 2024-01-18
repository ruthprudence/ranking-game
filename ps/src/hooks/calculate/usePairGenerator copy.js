import { useState, useEffect } from 'react';
import useP

const usePairGenerator = (items = []) => {
    const [pairs, setPairs] = useState([]);

    useEffect(() => {
        const generatePairs = () => {
            if (!items.length || items.length < 2) {
                return [];
            }

            const pairings = [];

            // General pairing logic for any number of items
            for (let i = 0; i < items.length; i++) {
                for (let j = i + 1; j < items.length; j++) {
                    pairings.push([items[i], items[j]]);
                }
            }

            // Sorting the pairings based on the provided logic
            pairings.sort((a, b) => {
                // Custom sorting logic based on the user's requirements
                // ...

                // Placeholder for sorting logic
                return 0; // Replace with actual sorting comparison
            });

            console.log('Pairs:', pairings);
            return pairings;
        };

        setPairs(generatePairs());
    }, [items]);

    return { pairs };
};

export default usePairGenerator;
