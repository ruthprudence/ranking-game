import { useState, useCallback, useEffect } from 'react';
import { MAXCHOICES, MINCHOICES } from '../utils/constants'; 

const useInputPage = (setItems, goToMatchupPage) => {
    const [rows, setRows] = useState(['', '', '']);
    const [isSubmitted, setIsSubmitted] = useState(false);

    console.log(`rows: ${rows}`);
    console.log(`isSubmitted: ${isSubmitted}`);

    const handleItemChange = useCallback((index, newItem) => {
        const updatedRows = [...rows];
        updatedRows[index] = newItem;
        setRows(updatedRows);
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
        console.log(`rows: ${rows}`);
        // console.log(`newItem: ${newItem}`);
        // console.log(`updatedRows: ${updatedRows}`);
        // console.log(`index: ${index}`);
        setRows([...rows, '']);
    }, [rows]);

    const handleRemoveItem = useCallback((index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
        console.log(`rows: ${rows}`);
        // console.log(`newItem: ${newItem}`);
        console.log(`updatedRows: ${updatedRows}`);
        console.log(`index: ${index}`);
    }, [rows]);

    

    const handleSubmit = useCallback(() => {
        if (rows.some(row => !row.trim())) {
            alert('All items must be filled in.');
            console.log(`rows: ${rows}`);
            // console.log(`newItem: ${newItem}`);
            // console.log(`updatedRows: ${updatedRows}`);
            // console.log(`index: ${index}`);
            return;
        }
        if (rows.length < MINCHOICES || rows.length > MAXCHOICES) {
            alert(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
            console.log(`rows: ${rows}`);
            // console.log(`newItem: ${newItem}`);
            // console.log(`updatedRows: ${updatedRows}`);
            // console.log(`index: ${index}`);
            return;
        }
        const itemsWithVotes = rows.map((name, index) => ({ id: index, name, votes: 0 }));
        setItems(itemsWithVotes);
        setIsSubmitted(true);
        console.log(`itemsWithVotes: ${itemsWithVotes}`);
        console.log(`rows: ${rows}`);
        // console.log(`newItem: ${newItem}`);
        // console.log(`updatedRows: ${updatedRows}`);
        // console.log(`index: ${index}`);
    }, [rows, setItems]);

    useEffect(() => {
        if (isSubmitted) {
            goToMatchupPage();
            setIsSubmitted(false);
            console.log(`rows: ${rows}`);
            // console.log(`newItem: ${newItem}`);
            // console.log(`updatedRows: ${updatedRows}`);
            // console.log(`index: ${index}`);
        }
    }, [isSubmitted, goToMatchupPage]);

    console.log(`rows: ${rows}`);
    // console.log(`newItem: ${newItem}`);
    // console.log(`updatedRows: ${updatedRows}`);
    // console.log(`index: ${index}`);

    return { rows, handleItemChange, handleAddItem, handleRemoveItem, handleSubmit };
};

export default useInputPage;