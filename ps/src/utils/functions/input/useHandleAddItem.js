// functions/handleAddItem.js
import { useCallback } from 'react';
import { MAXCHOICES } from '../../../../../utils/constants';

const useHandleAddItem = (rows, setRows) => {
    return useCallback(() => {
        if (rows.length >= MAXCHOICES) {
            alert(`You cannot add more than ${MAXCHOICES} items.`);
            return;
        }
        setRows([...rows, '']);
    }, [rows, setRows]);
};

export default useHandleAddItem;