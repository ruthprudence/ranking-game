// useResultsPage.js
import { useState, useEffect } from 'react';

const useResultsPage = (items) => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const scores = items.reduce((acc, item) => {
            acc[item.id] = item.votes;
            return acc;
        }, {});

        const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        let lastScore = null;
        let rank = 0;
        const adjustedRankings = sortedChoices.map(([id, score], index) => {
            if (score !== lastScore) {
                rank = index + 1;
                lastScore = score;
            }
            const itemName = items.find(item => item.id.toString() === id).name;
            return [itemName, score, rank];
        });

        setRankings(adjustedRankings);
    }, [items]);

    return { rankings };
};

export default useResultsPage;
