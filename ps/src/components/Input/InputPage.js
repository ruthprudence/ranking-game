import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRow, removeRow, updateRow, submitInputPage } from '../../features/ui/uiSlice';
import { validateRowsState } from '../../features/validate/validateSlice'; // Import the action
import { setCurrentPage } from '../../features/game/gameSlice';
import { InputView } from './InputView';
import { PAGES } from '../../features/constants';

const InputPage = () => {
    const topic = useSelector((state) => state.ui.topic);
    const rows = useSelector((state) => state.ui.rows);
    const dispatch = useDispatch();
    const rowsValidationResult = useSelector((state) => state.validate.rowsValidationResult);

    useEffect(() => {
        // Run validation on rows change
        dispatch(validateRowsState(rows));
    }, [rows, dispatch]);

    // Determine if the submit button should be enabled
    const isSubmitEnabled = rowsValidationResult?.isValid && rows.length > 0;

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
        if (isSubmitEnabled) {
            dispatch(submitInputPage());
            dispatch(setCurrentPage(PAGES.MATCHUP)); // Move to the next page if submission is successful
        } else {
            console.error('Submission failed: Rows are not valid.');
        }
    };

    return (
        <InputView 
            topic={topic}
            rows={rows}
            handleAddRow={handleAddRow} 
            handleRemoveRow={handleRemoveRow}
            handleItemChange={handleItemChange}
            handleSubmit={handleSubmit}
            isSubmitEnabled={isSubmitEnabled}
        />
    );
};

export default InputPage;
