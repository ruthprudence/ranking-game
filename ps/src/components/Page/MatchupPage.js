import React from 'react';
import Button from '../UI/Button';
import useMatchupPage from '../../hooks/Page/useMatchupPage';

const MatchupPage = ({ items, pairs, goToResultsPage }) => {
    console.log('Items:', items.map(item => `${item.name}: ${item.votes}`));
    console.log('Pairs:', pairs);

    const { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect } = useMatchupPage(items, pairs, goToResultsPage);

    if (!pairs || pairs.length === 0) {
        return <div>No pairs available for matchups</div>;
    }

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
