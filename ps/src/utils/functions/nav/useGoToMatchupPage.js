import { useCallback } from 'react';

const useGoToMatchupPage = (setItems, setItemsUpdated, setCurrentPage) => {
    return useCallback(updatedItems => {
        if (updatedItems) {
            setItems(updatedItems);
            setItemsUpdated(true);
        }
        setCurrentPage('MATCHUP_PAGE');
    }, [setItems, setItemsUpdated, setCurrentPage]);
};

export default useGoToMatchupPage;