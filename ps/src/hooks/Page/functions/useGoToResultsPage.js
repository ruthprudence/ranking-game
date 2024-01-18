// useGoToResultsPage.js
import { useCallback } from 'react';

const useGoToResultsPage = (setItems, setScores, setCurrentPage) => {

    return useCallback(() => {
        console.log('setItems', setItems);
        const updatedItems = setItems;
        setScores(updatedItems);
        setCurrentPage('RESULTS_PAGE');
    }, [setItems, setScores, setCurrentPage]);
};

export default useGoToResultsPage;