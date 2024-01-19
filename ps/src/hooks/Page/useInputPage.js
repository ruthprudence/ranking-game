import { useState, useCallback, useEffect } from 'react';
import { MAXCHOICES, MINCHOICES } from '../utils/constants'; 
import useHandleItemChange from './functions/input/useHandleItemChange';
import useHandleAddItem from './functions/input/useHandleAddItem';
import useHandleRemoveItem from './functions/input/useHandleRemoveItem';
import useHandleSubmit from './functions/input/useHandleSubmit';

const useInputPage = (setItems, goToMatchupPage) => {
    const [rows, setRows] = useState(['', '', '']);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleItemChangeFunc = useHandleItemChange(rows, setRows);
    const handleAddItemFunc = useHandleAddItem(rows, setRows);
    const handleRemoveItemFunc = useHandleRemoveItem(rows, setRows);
    const handleSubmitFunc = useHandleSubmit(rows, setItems, setIsSubmitted);

    useEffect(() => {
        if (isSubmitted) {
            goToMatchupPage();
            setIsSubmitted(false);
        }
    }, [isSubmitted, goToMatchupPage]);

    return { rows, handleItemChange: handleItemChangeFunc, handleAddItem: handleAddItemFunc, handleRemoveItem: handleRemoveItemFunc, handleSubmit: handleSubmitFunc };
};

export default useInputPage;
