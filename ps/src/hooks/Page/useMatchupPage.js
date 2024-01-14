import { useState, useCallback } from 'react';

const useMatchupPage = (items, pairs, goToResultsPage) => {
    const [scores, setScores] = useState({});
    const [currentPairIndex, setCurrentPairIndex] = useState(0);

    const currentPair = pairs[currentPairIndex];

    // Ensure that the useCallback hook is used at the top level
    const handleChoiceSelection = useCallback((selectedChoice) => {
        setScores(prevScores => ({
            ...prevScores,
            [selectedChoice]: (prevScores[selectedChoice] || 0) + 1
        }));

        if (currentPairIndex < pairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
        } else {
            goToResultsPage(scores);
        }
    }, [currentPairIndex, pairs, scores, goToResultsPage]);

    const handleVote = (chosenItem) => {
        handleChoiceSelection(chosenItem);
    };

    // Add checks to ensure currentPair is defined and is an array
    const handleLeftChoiceSelect = () => {
        if (Array.isArray(currentPair) && currentPair.length > 0) {
            handleVote(items[currentPair[0]]);
        }
    };

    const handleRightChoiceSelect = () => {
        if (Array.isArray(currentPair) && currentPair.length > 1) {
            handleVote(items[currentPair[1]]);
        }
    };

    return { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect, scores };
};

export default useMatchupPage;
