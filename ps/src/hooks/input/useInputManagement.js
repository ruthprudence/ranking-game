// useInputManagement.js
import { useState, useCallback } from 'react';
import { MAXCHOICES, MINCHOICES } from '../utils/constants';

const useInputManagement = (initialRows = []) => {
    const [rows, setRows] = useState(initialRows);

    const addRow = useCallback((newRow = '') => {
        if (rows.length < MAXCHOICES) {
            setRows([...rows, newRow]);
        }
    }, [rows]);

    const removeRow = useCallback((index) => {
        if (rows.length > MINCHOICES) {
            const newRows = [...rows];
            newRows.splice(index, 1);
            setRows(newRows);
        } else {
            alert(`Cannot remove. You must have at least ${MINCHOICES} items.`);
        }
    }, [rows]);

    const updateRow = useCallback((index, updatedValue) => {
        if (index >= 0 && index < rows.length) {
            setRows(rows.map((row, i) => (i === index ? updatedValue : row)));
        }
    }, [rows]);

    return { rows, addRow, removeRow, updateRow };
};

export default useInputManagement;
