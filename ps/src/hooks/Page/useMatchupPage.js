import { useState, useCallback, useEffect } from 'react';

const useMatchupPage = (items, pairs, goToResultsPage) => {
    const [scores, setScores] = useState({});
    const [currentPairIndex, setCurrentPairIndex] = useState(0);
    const [shouldGoToResults, setShouldGoToResults] = useState(false);

    const currentPair = pairs && pairs[currentPairIndex];


    const handleChoiceSelection = useCallback((selectedChoiceId) => {
        setScores(prevScores => ({
            ...prevScores,
            [selectedChoiceId]: (prevScores[selectedChoiceId] || 0) + 1
        }));

        if (currentPairIndex < pairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
        } else {
            setShouldGoToResults(true); // Set flag to true when it's time to navigate
        }
    }, [currentPairIndex, pairs]);

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

    // Navigate to results page when all pairs are processed
    useEffect(() => {
        if (shouldGoToResults) {
            const updatedItems = items.map(item => ({
                ...item,
                votes: scores[item.id] || 0
            }));
            goToResultsPage(updatedItems);
        }
    }, [shouldGoToResults, items, scores, goToResultsPage]);
    console.log(`items: ${items}, scores: ${scores}`);
    console.log('Current Pair:', currentPair);
    return { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect };
};

export default useMatchupPage;
