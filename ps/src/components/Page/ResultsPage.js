import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateScores, calculateRankings, selectRankings } from '../../features/matchup/matchupSlice';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.matchup.items); // Use items from matchupSlice
    const rankings = useSelector(selectRankings);

    useEffect(() => {
        // Calculate scores and rankings based on the items from the matchups
        if (items && items.length > 0) {
            dispatch(calculateScores());
            dispatch(calculateRankings());
        }
    }, [dispatch, items]);

    return (
        <div>
            <h2>Results</h2>
            {rankings.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankings.map(({ itemName, score, rank }, index) => (
                            <tr key={index}>
                                <td>{rank}</td>
                                <td>{itemName}</td>
                                <td>{score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No results available.</p>
            )}
        </div>
    );
};

export default ResultsPage;
