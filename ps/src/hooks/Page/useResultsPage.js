import { useState, useEffect } from 'react';
import { calculateScores } from '../calculate/scoreCalculator';
import { calculateRankings } from '../calculate/rankingCalculator';

const useResultsPage = (items) => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const scores = calculateScores(items);
        const adjustedRankings = calculateRankings(items, scores);

        setRankings(adjustedRankings);
    }, [items]);

    return { rankings };
};

export default useResultsPage;
