// useGoToResultsPage.js
import { useCallback } from 'react';

const useGoToResultsPage = (setItems, setScores, setCurrentPage) => {
    return useCallback((updatedItems) => {
        setItems(updatedItems); // Correctly update the items state
        setScores(updatedItems); // Assuming setScores expects the same data structure as setItems
        setCurrentPage('RESULTS_PAGE');
    }, [setItems, setScores, setCurrentPage]);
};

export default useGoToResultsPage;
