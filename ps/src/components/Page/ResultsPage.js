import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectRankings } from '../../features/matchup/matchupSlice';
import { calculateScores } from '../../utils/calculateScores';
import { calculateRankings } from '../../utils/calculateRankings';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.game.items);
    const rankings = useSelector(selectRankings);

    useEffect(() => {
          dispatch(calculateScores());
          dispatch(calculateRankings());
      }, [dispatch]);
      
      console.log('Rankings:', rankings);
      

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
