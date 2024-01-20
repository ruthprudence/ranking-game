// InputPage.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { useSelector, useDispatch } from 'react-redux';
import { addRow, removeRow, updateRow, submitInputPage } from '../../features/game/gameSlice';

const InputPage = () => {
    const topic = useSelector((state) => state.game.topic);
    const rows = useSelector((state) => state.game.rows);
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
        <div>
            <h2>{topic}</h2>
            <table>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {/* ... existing row rendering ... */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button onClick={handleAddRow}>Add Item</Button>
            <Button onClick={handleSubmit}>Submit</Button>
            <p><i>Click "Submit" to begin</i></p>
        </div>
    );
};

export default InputPage;
