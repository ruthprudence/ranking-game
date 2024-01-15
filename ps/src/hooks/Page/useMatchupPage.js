import { useState, useCallback } from 'react';

const useMatchupPage = (items, pairs, goToResultsPage) => {
    const [scores, setScores] = useState({});
    const [currentPairIndex, setCurrentPairIndex] = useState(0);

    const currentPair = pairs && pairs[currentPairIndex];

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
        const itemId = chosenItem.id;
        handleChoiceSelection(itemId);
    };
    
    const handleLeftChoiceSelect = () => {
        if (currentPair && currentPair.length > 0) {
            handleVote(items[currentPair[0]]);
        }
    };
    
    const handleRightChoiceSelect = () => {
        if (currentPair && currentPair.length > 1) {
            handleVote(items[currentPair[1]]);
        }
    };

    console.log(`scores is ${JSON.stringify(scores)}`);
    return { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect, scores };
};

export default useMatchupPage;
