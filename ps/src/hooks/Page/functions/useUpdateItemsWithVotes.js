import { useCallback } from 'react';

const useUpdateItemsWithVotes = (setItems, setItemsUpdated) => {
    return useCallback((updatedItems) => {
        setItems(updatedItems);
        setItemsUpdated(true);
    }, [setItems, setItemsUpdated]);
};

export default useUpdateItemsWithVotes;