// functions/handleChoiceSelection.js
import { useCallback } from 'react';

const useHandleChoiceSelection = (currentPairIndex, pairs, setScores, setCurrentPairIndex, setShouldGoToResults) => {
    return useCallback((selectedChoiceId) => {
        setScores(prevScores => ({
            ...prevScores,
            [selectedChoiceId]: (prevScores[selectedChoiceId] || 0) + 1
        }));

        if (currentPairIndex < pairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
        } else {
            setShouldGoToResults(true); // Set flag to true when it's time to navigate
        }
    }, [currentPairIndex, pairs, setScores, setCurrentPairIndex, setShouldGoToResults]);
};

export default useHandleChoiceSelection;