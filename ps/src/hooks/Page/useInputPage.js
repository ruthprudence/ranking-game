// useInputPage.js
import { useState, useCallback } from 'react';
import { MAXCHOICES, MINCHOICES } from '../utils/constants'; 


const useInputPage = (setItems, goToMatchupPage) => {
    const [rows, setRows] = useState(['', '', '']);

    const handleItemChange = useCallback((index, newItem) => {
        const updatedRows = [...rows];
        updatedRows[index] = newItem;
        setRows(updatedRows);
    }, [rows]);

    const handleAddItem = useCallback(() => {
        if (rows.length >= MAXCHOICES) {
            alert(`You cannot add more than ${MAXCHOICES} items.`);
            return;
        }
        setRows([...rows, '']);
    }, [rows]);

    const handleRemoveItem = useCallback((index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    }, [rows]);

    const handleSubmit = useCallback(() => {
        if (rows.some(row => !row.trim())) {
            alert('All items must be filled in.');
            return;
        }
        // Validate items and transition to matchup page
        if (rows.length < MINCHOICES || rows.length > MAXCHOICES) {
            alert(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
            return;
        }
        const itemsWithVotes = rows.map(name => ({ name, votes: 0 }));
        setItems(itemsWithVotes);
        goToMatchupPage(itemsWithVotes);
    }, [rows, setItems, goToMatchupPage]);

    return { rows, handleItemChange, handleAddItem, handleRemoveItem, handleSubmit };
};

export default useInputPage;
