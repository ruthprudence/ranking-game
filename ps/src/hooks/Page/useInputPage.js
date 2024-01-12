// useInputPage.js
import { useState, useCallback } from 'react';

const useInputPage = (setItems, goToMatchupPage) => {
    const [rows, setRows] = useState([]);

    const handleItemChange = useCallback((index, newItem) => {
        const updatedRows = [...rows];
        updatedRows[index] = newItem;
        setRows(updatedRows);
    }, [rows]);

    const handleAddItem = useCallback(() => {
        setRows([...rows, '']);
    }, [rows]);

    const handleRemoveItem = useCallback((index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    }, [rows]);

    const handleSubmit = useCallback(() => {
        // Validate items and transition to matchup page
        if (rows.some(row => row.trim() === '')) {
            alert('Please fill in all entries before submitting.');
            return;
        }
        setItems(rows);
        goToMatchupPage(rows);
    }, [rows, setItems, goToMatchupPage]);

    return { rows, handleItemChange, handleAddItem, handleRemoveItem, handleSubmit };
};

export default useInputPage;
