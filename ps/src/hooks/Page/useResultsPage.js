// useResultsPage.js
import { useState, useEffect } from 'react';
import { getAdjustedRankingsData } from '../models/PriorityModel';

export const useResultsPage = (items) => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const scores = items.reduce((acc, item) => {
            acc[item.name] = item.votes;
            return acc;
        }, {});

        const adjustedRankings = getAdjustedRankingsData(scores);
        setRankings(adjustedRankings);
    }, [items]);

    return { rankings };
};
