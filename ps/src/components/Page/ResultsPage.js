// ResultsPage.js
import React from 'react';
import useResultsPage from '../hooks/Page/useResultsPage';

const ResultsPage = ({ items }) => {
    const { rankings } = useResultsPage(items);

    return (
        <div>
            <h1>Results Page</h1>
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
