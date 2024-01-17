import React from 'react';
import Button from '../UI/Button';
import useMatchupPage from '../../hooks/Page/useMatchupPage';

const MatchupPage = ({ items, pairs, goToResultsPage }) => {
    console.log(`items: ${items}`);
    console.log(`pairs: ${pairs}`);
    // Call the hook at the top level
    const { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect } = useMatchupPage(items, pairs, goToResultsPage);

    return (
        <div>
            <h1>Matchup Page</h1>
            <div>
                {currentPair && (
                    <>
                        <Button onClick={handleLeftChoiceSelect}>{items[currentPair[0]].name}</Button>
                        <Button onClick={handleRightChoiceSelect}>{items[currentPair[1]].name}</Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default MatchupPage;
