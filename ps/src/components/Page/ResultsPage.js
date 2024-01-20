import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateScores, calculateRankings, selectRankings } from '../../features/items/itemsSlice';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.game.items);
    const rankings = useSelector(selectRankings);

    useEffect(() => {
        dispatch(calculateScores());
        dispatch(calculateRankings());
    }, [dispatch, items]);

    return (
        <div>
            <h2>Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {rankings.map(({ name, score, rank }, index) => (
                        <tr key={index}>
                            <td>{rank}</td>
                            <td>{name}</td>
                            <td>{score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsPage;
