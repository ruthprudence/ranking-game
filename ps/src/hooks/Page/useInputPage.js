import { useState, useCallback, useEffect } from 'react';
import { MAXCHOICES, MINCHOICES } from '../utils/constants'; 

const useInputPage = (setItems, goToMatchupPage) => {
    const [rows, setRows] = useState(['', '', '']);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        if (rows.length < MINCHOICES || rows.length > MAXCHOICES) {
            alert(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
            return;
        }
        const itemsWithVotes = rows.map((name, index) => ({ id: index, name, votes: 0 }));
        setItems(itemsWithVotes);
        setIsSubmitted(true);
    }, [rows, setItems]);

    useEffect(() => {
        if (isSubmitted) {
            goToMatchupPage();
            setIsSubmitted(false);
        }
    }, [isSubmitted, goToMatchupPage]);

    console.log(`rows: ${rows}`);

    return { rows, handleItemChange, handleAddItem, handleRemoveItem, handleSubmit };
};

export default useInputPage;