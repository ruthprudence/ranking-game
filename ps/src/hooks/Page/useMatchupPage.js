// useMatchupPage.js
import { useState, useCallback } from 'react';

const useMatchupPage = (items, goToResultsPage) => {
    const [scores, setScores] = useState({});
    const [currentPairIndex, setCurrentPairIndex] = useState(0);

    // Assuming pairs are generated and available
    const currentPair = pairs[currentPairIndex];

    const handleChoiceSelection = useCallback((selectedChoice) => {
        setScores(prevScores => ({
            ...prevScores,
            [selectedChoice]: (prevScores[selectedChoice] || 0) + 1
        }));

        if (currentPairIndex < pairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
        } else {
            // Logic to handle the completion of matchups
            goToResultsPage(scores);
        }
    }, [currentPairIndex, pairs, scores, goToResultsPage]);

    const handleVote = (chosenItem) => {
        handleChoiceSelection(chosenItem);
    };

    const handleLeftChoiceSelect = () => handleVote(items[currentPair[0]]);
    const handleRightChoiceSelect = () => handleVote(items[currentPair[1]]);

    return { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect, scores };
};

export default useMatchupPage;
