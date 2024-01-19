// functions/useHandleItemChange.js
import { useCallback } from 'react';

const useHandleItemChange = (rows, setRows) => {
    return useCallback((index, newItem) => {
        const updatedRows = [...rows];
        updatedRows[index] = newItem;
        setRows(updatedRows);
    }, [rows, setRows]);
};

export default useHandleItemChange;