// functions/useHandleRemoveItem.js
import { useCallback } from 'react';

const useHandleRemoveItem = (rows, setRows) => {
    return useCallback((index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    }, [rows, setRows]);
};

export default useHandleRemoveItem;