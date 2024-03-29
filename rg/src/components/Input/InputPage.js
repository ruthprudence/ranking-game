import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRow, removeRow, updateRow, submitInputPage, clearRow } from '../../features/ui/uiSlice';
import { validateRowsState } from '../../features/validate/validateSlice'; // Import the action
import { setCurrentPage } from '../../features/game/gameSlice';
import { InputView } from './InputView';
import { PAGES } from '../../features/constants';

const InputPage = ({ animationClass }) => {
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

    useEffect(() => {
        if (rows.length >= 4) {
            // Delay the scroll to allow the DOM to update
            setTimeout(() => {
                window.scrollBy({ top: 105, behavior: 'smooth' });
            }, 100); // Adjust the delay as needed
        }
    }, [rows.length]);
    

    const handleAddRow = () => {
        setTimeout (() => {
           dispatch(addRow({animate: 'in'}));
        }, 200);
    }

    const handleClearRow = (index) => {
        dispatch(clearRow(index));
    }

    const handleItemChange = (index, value) => {
        dispatch(updateRow({ index, updatedValue: value }));
    };

    const handleRemoveRow = (index) => {
        dispatch(updateRow({ index, updateValue: { animate: 'out' }}));

        setTimeout(() => {
            dispatch(removeRow(index));
            if (rows.length > 3) {
                // Scroll up slightly when a row is removed
                setTimeout(() => {
                    window.scrollBy({ top: -105, behavior: 'smooth' });
                }, 100); 
            }
        }, 100);


    };

    const handleSubmit = () => {
        if (isSubmitEnabled) {
            dispatch(submitInputPage());
            dispatch(setCurrentPage(PAGES.MATCHUP)); // Move to the next page if submission is successful
            setTimeout(() => window.scrollTo(0, 0), 0); 
        } else {
            console.error('Submission failed: Rows are not valid.');
        }
    };

    const addButtonClass = rows.length === 3 ? 'add-button-center' : 'add-button-right'; 

    return (
        <InputView 
            animationClass={animationClass}
            topic={topic}
            rows={rows}
            handleAddRow={handleAddRow} 
            handleRemoveRow={handleRemoveRow}
            handleItemChange={handleItemChange}
            handleSubmit={handleSubmit}
            isSubmitEnabled={isSubmitEnabled}
            handleClearRow={handleClearRow}
            addButtonClass={addButtonClass}
        />
    );
};

export default InputPage;
