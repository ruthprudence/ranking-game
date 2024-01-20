// ResultsPage.js
import React from 'react';
import useResultsPage from '../../trash/hooks/Page/useResultsPage';
import {useSelector} from 'react-redux';

const ResultsPage = () => {
    // console.log('items ', items);
    const items = useSelector((state) => state.game.items);

    const { rankings } = useResultsPage(items);
    console.log('rankings ', rankings);
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
                    {rankings.map(([name, votes, rank], index) => (
                        <tr key={index}>
                            <td>{rank}</td>
                            <td>{name}</td>
                            <td>{votes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsPage;
