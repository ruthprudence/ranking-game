// ResultsView.js
import React from 'react';
import Button from '../UI/Button';

export const ResultsView = ({ rankings}) => {
    return (
        <div className="page-view">
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