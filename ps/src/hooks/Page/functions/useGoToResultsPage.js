import { useCallback } from 'react';
import useUpdateItemsWithVotes from './useUpdateItemsWithVotes';

const useGoToResultsPage = (setItems, setScores, setCurrentPage) => {
    const updatedItems = useUpdateItemsWithVotes(setItems);

    return useCallback(() => {
        setScores(updatedItems);
        setCurrentPage('RESULTS_PAGE');
    }, [setItems, setScores, setCurrentPage, updatedItems]);
};

export default useGoToResultsPage;