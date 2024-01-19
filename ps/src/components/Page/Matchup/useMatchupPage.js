import { useState, useCallback, useEffect } from 'react';
import useHandleChoiceSelection from '../../hooks/Page/functions/input/useHandleChoiceSelection';
import useHandleVote from '../../hooks/Page/functions/input/useHandleVote';
import useHandleLeftChoiceSelect from '../../hooks/Page/functions/input/useHandleLeftChoiceSelect';
import useHandleRightChoiceSelect from '../../hooks/Page/functions/input/useHandleRightChoiceSelect';

const useMatchupPage = (items, pairs, goToResultsPage) => {
    const [scores, setScores] = useState({});
    const [currentPairIndex, setCurrentPairIndex] = useState(0);
    const [shouldGoToResults, setShouldGoToResults] = useState(false);

    const currentPair = pairs && pairs[currentPairIndex];

    const handleChoiceSelectionFunc = useHandleChoiceSelection(currentPairIndex, pairs, setScores, setCurrentPairIndex, setShouldGoToResults);

    const handleVote = useHandleVote(handleChoiceSelectionFunc);
    
    const handleLeftChoiceSelect = useHandleLeftChoiceSelect(currentPair, items, handleVote);

    const handleRightChoiceSelect = useHandleRightChoiceSelect(currentPair, items, handleVote);

    // Navigate to results page when all pairs are processed
    useEffect(() => {
        if (shouldGoToResults) {
            const updatedItems = items.map(item => ({
                ...item,
                votes: scores[item.id] || 0
            }));
            goToResultsPage(updatedItems);
            console.log('useEffect - shouldGoToResults:', { shouldGoToResults, updatedItems });
        }
    }, [shouldGoToResults, items, scores, goToResultsPage]);

    return { currentPair, handleLeftChoiceSelect: handleLeftChoiceSelect, handleRightChoiceSelect: handleRightChoiceSelect};
};

export default useMatchupPage;
