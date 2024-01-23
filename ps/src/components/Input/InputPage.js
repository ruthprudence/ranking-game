// InputPage.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { useSelector, useDispatch } from 'react-redux';
import { addRow, removeRow, updateRow} from '../../features/ui/uiSlice';
import { submitInputPage } from '../../features/actions';
import { initializeScores } from '../../utils/initializeScores';    
import { InputView } from './InputView';

const InputPage = () => {
    const topic = useSelector((state) => state.ui.topic);
    const rows = useSelector((state) => state.ui.rows);
    
    const dispatch = useDispatch();

    const handleAddRow = () => {
        dispatch(addRow());
    };

    const handleItemChange = (index, value) => {
        dispatch(updateRow({ index, updatedValue: value }));
    };

    const handleRemoveRow = (index) => {
        dispatch(removeRow(index));
    };

    const handleSubmit = () => {
        dispatch(submitInputPage(rows));
    };

    return (
        <InputView 
            topic={topic}
            rows={rows}
            handleAddRow={addRow} 
            handleRemoveRow={removeRow}
            handleItemChange={updateRow}
            handleSubmit={handleSubmit}            
        />
    );
};

export default InputPage;
