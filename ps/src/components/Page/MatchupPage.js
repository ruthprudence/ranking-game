// MatchupPage.js
import React from 'react';
import useMatchupPage from '../hooks/Page/useMatchupPage';

const MatchupPage = ({ items, pairs, goToResultsPage }) => {
    const { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect } = useMatchupPage(items, pairs, goToResultsPage);

    return (
        <div>
            <h1>Matchup Page</h1>
            <div>
                <button onClick={handleLeftChoiceSelect}>{items[currentPair[0]]}</button>
                <button onClick={handleRightChoiceSelect}>{items[currentPair[1]]}</button>
            </div>
        </div>
    );
};

export default MatchupPage;
