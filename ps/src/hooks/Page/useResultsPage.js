// useResultsPage.js
import { useState, useEffect } from 'react';

const useResultsPage = (items) => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const scores = items.reduce((acc, item) => {
            acc[item.name] = item.votes;
            return acc;
        }, {});

        const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        let lastScore = null;
        let rank = 0;
        const adjustedRankings = sortedChoices.map(([choice, score], index) => {
            if (score !== lastScore) {
                rank = index + 1;
                lastScore = score;
            }
            return [choice, score, rank];
        });

        setRankings(adjustedRankings);
    }, [items]);

    return { rankings };
};

export default useResultsPage;
