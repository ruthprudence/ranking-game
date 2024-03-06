// ResultsView.js
import React from 'react';
import Footer from '../UI/Footer';
import { RenderFooterButton } from '../../features/ui/RenderFooterButton';

export const ResultsView = ({ topic, rankings, animationClass}) => {
    return (
        <div className="page-view">
            <div className={animationClass}>
                <h2 id="headingResults">{topic} <span className="smaller-text">..ranked!</span></h2>
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
         
            <div className="playAgain"><RenderFooterButton/> </div>
            <div className="slideBottomToTop">
        <div className="footer-container resultsFooter"><Footer /> </div>
        </div>
    </div>
    </div>
    );
};