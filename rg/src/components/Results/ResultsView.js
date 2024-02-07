// ResultsView.js
import React from 'react';
import Footer from '../UI/Footer';

export const ResultsView = ({ topic, rankings}) => {
    return (
        <div className="page-view">
        <h2 id="headingResults">{topic} ..ranked!</h2>
        {rankings.length > 0 ? (
            <table id="resultsTable">
                <thead>
                    <tr>
                        <th id="resultsTableRank">Rank</th>
                        <th id="resultsTableName">Name</th>
                        <th id="resultsTableVotes">Votes</th>
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