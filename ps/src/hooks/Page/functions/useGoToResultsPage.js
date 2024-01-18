// useGoToResultsPage.js
import { useCallback } from 'react';
import useUpdateItemsWithVotes from './useUpdateItemsWithVotes';

const useGoToResultsPage = (setItems, setScores, setCurrentPage) => {
    const updateItemsWithVotes = useUpdateItemsWithVotes();

    return useCallback(() => {
        const updatedItems = updateItemsWithVotes(setItems);
        setScores(updatedItems);
        setCurrentPage('RESULTS_PAGE');
    }, [setItems, setScores, setCurrentPage, updateItemsWithVotes]);
};

export default useGoToResultsPage;