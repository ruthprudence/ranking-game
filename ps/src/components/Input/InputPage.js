// InputPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRow, removeRow, updateRow, submitInputPage } from '../../features/ui/uiSlice';
import { setCurrentPage } from '../../features/game/gameSlice';
import { InputView } from './InputView';

const InputPage = () => {
    const topic = useSelector((state) => state.ui.topic);
    const rows = useSelector((state) => state.ui.rows);
    const isSubmissionFailed = useSelector((state) => state.ui.isSubmissionFailed);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isSubmissionFailed) {
            dispatch(setCurrentPage('MATCHUP_PAGE'));
        }
    }, [dispatch, isSubmissionFailed]);

    const handleAddRow = () => {
        console.log('InputPage.js handleAddRow');
        dispatch(addRow());
    };

    const handleItemChange = (index, value) => {
        console.log('InputPage.js handleItemChange index: ', index, ' value: ', value);
        dispatch(updateRow({ index, updatedValue: value }));
    };

    const handleRemoveRow = (index) => {
        console.log('InputPage.js handleRemoveRow index: ', index);
        dispatch(removeRow(index));
    };

    const handleSubmit = () => {
        dispatch(submitInputPage(rows));

        if (!isSubmissionFailed) {
            dispatch(setCurrentPage('MATCHUP_PAGE'));
        } else {
            console.error('Submission failed, staying on InputPage.');
        }
    };
      

    return (
        <InputView 
        topic={topic}
        rows={rows}
        isSubmissionFailed={isSubmissionFailed}
        handleAddRow={handleAddRow} 
        handleRemoveRow={handleRemoveRow}
        handleItemChange={handleItemChange}
        handleSubmit={handleSubmit}            
    />
    );
};

export default InputPage;
