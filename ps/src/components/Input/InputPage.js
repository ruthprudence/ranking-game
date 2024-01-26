// InputPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRow, removeRow, updateRow, submitInputPage} from '../../features/ui/uiSlice';
import { InputView } from './InputView';

const InputPage = () => {
    const topic = useSelector((state) => state.ui.topic);
    const rows = useSelector((state) => state.ui.rows);
    const isSubmissionFailed = useSelector((state) => state.ui.isSubmissionFailed);
    const dispatch = useDispatch();

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
        console.log('InputPage.js handleSubmit rows: ', rows);
        dispatch(submitInputPage(rows));
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
