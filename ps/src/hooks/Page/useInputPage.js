import { useState, useCallback, useEffect } from 'react';
import { MAXCHOICES, MINCHOICES } from '../utils/constants'; 

const useInputPage = (setItems, goToMatchupPage) => {
    const [rows, setRows] = useState(['', '', '']);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Log rows and isSubmitted states
    console.log(`rows: ${rows}`);
    console.log(`isSubmitted: ${isSubmitted}`);

    const handleItemChange = useCallback((index, newItem) => {
        const updatedRows = [...rows];
        updatedRows[index] = newItem;
        setRows(updatedRows);

        // Log the changes in rows, newItem, updatedRows, and index
        console.log(`rows: ${rows}`);
        console.log(`newItem: ${newItem}`);
        console.log(`updatedRows: ${updatedRows}`);
        console.log(`index: ${index}`);
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

        // Detailed logging of itemsWithVotes
        console.log('handleSubmit - itemsWithVotes:', itemsWithVotes);
    }, [rows, setItems]);

    useEffect(() => {
        if (isSubmitted) {
            goToMatchupPage();
            setIsSubmitted(false);

            // Detailed logging for useEffect
            console.log('useEffect - isSubmitted:', { isSubmitted, goToMatchupPageCalled: true });
        }
    }, [isSubmitted, goToMatchupPage]);

    return { rows, handleItemChange, handleAddItem, handleRemoveItem, handleSubmit };
};

export default useInputPage;
