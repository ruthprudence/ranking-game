import React from 'react';
import Button from '../UI/Button';
import useMatchupPage from '../../hooks/Page/useMatchupPage';

const MatchupPage = ({ items, pairs, goToResultsPage, topic }) => {
    console.log('MatchupPage - Props:', { items, pairs });

    // Call the hook at the top level
    const { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect } = useMatchupPage(items, pairs, goToResultsPage);

    return (
        <div>
            <h3>{topic}</h3>
            <div>
                {currentPair && (
                    <>
                        <Button onClick={handleLeftChoiceSelect}>{items[currentPair[0]].name}</Button>
                        <Button onClick={handleRightChoiceSelect}>{items[currentPair[1]].name}</Button>
                    </>
                )}
            </div>
            <p><i>Who Wins?</i></p>
        </div>
    );
};

export default MatchupPage;
