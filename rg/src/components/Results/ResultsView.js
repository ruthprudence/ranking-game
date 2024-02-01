// ResultsView.js
import React from 'react';
import Button from '../UI/Button';
import Footer from '../UI/Footer';

export const ResultsView = ({ topic, rankings}) => {
    return (
        <div className="page-view">
        <h2>{topic} ..ranked!</h2>
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
        <Footer /> 
    </div>
    );
};