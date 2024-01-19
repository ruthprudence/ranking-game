// functions/useHandleSubmit.js
import { useCallback } from 'react';
import { MAXCHOICES, MINCHOICES } from '../../../../../utils/constants';

const useHandleSubmit = (rows, setItems, setIsSubmitted) => {
    return useCallback(() => {
        if (rows.some(row => !row.trim())) {
            alert('All items must be filled in.');
            return;
        }
        if (rows.length < MINCHOICES || rows.length > MAXCHOICES) {
            alert(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
            return;
        }
        const itemsWithVotes = rows.map((name, index) => ({ id: index, name, votes: 0 }));
        setItems(itemsWithVotes);
        setIsSubmitted(true);
    }, [rows, setItems, setIsSubmitted]);
};

export default useHandleSubmit;